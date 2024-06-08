import { create, read } from "./fetch.js";
import { URL_USERS } from "./routes.js";

/**Refered inputs with the informations of Users */
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dobInput = document.getElementById('dob');
const passwordInput = document.getElementById('password');
const registerForm = document.getElementById('registerForm');

/**Add event submit to the form to get the register of user an register him/her*/
registerForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    validation();
})
/**verificate that the email not exist already in the DB */
async function validation() {
    /**Fetch type get */
    const data = await read(`${URL_USERS}?email=${emailInput.value.toLowerCase()}`);
    /**If the list of coincidences is not empty, stop the creation of the new user */
    if (data.length > 0) {
        alert("¡Email already registered!");
        return;
    }
    /**If in the api json doesn't exist the same email, run the function createUser() */
    createUser();
}

/**Create new user in the api json with the info of inputs*/
async function createUser(){
    /**year-month-day [0]-> year [1]-> month [2]-> day*/
    const dateInput = dobInput.split('-'); 
    const month = dateInput[1];
    const year = dateInput[0];
    const date = new Date();
    /**verificate if the date belong to a younger */
    if (year > date.getFullYear()-18 ||
        (year == date.getFullYear()-18 && month > date.getMonth())) {
        alert("¡Es menor de edad!");
        return;
    }

    const user = {
        "name":nameInput.value,
        "email":emailInput.value.toLowerCase(),
        "dob":dobInput.value,
        "password":passwordInput.value,
        "role": "visitor"/**For default all the users gonna have the rol visitor */ 
    }
    /**Send the information to the DB */
    const data = await create(URL_USERS,user);
    /**If all happen succesfull, show an alert to the admin */
    alert (data["name"]+"is already registered");
}

