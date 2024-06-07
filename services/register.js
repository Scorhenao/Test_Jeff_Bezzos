import { create, read } from "./fetch.js";
import { URL_USERS } from "./route.js";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dobInput = document.getElementById("dob");
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    validation();
})

async function validation() {
    const data = await read(`${URL_USERS}?email=${emailInput.value}`);
    if (data.length>0) {
        alert("Email already is resgistered");
        return; 
    }
    createUser();
}

async function createUser(){
    const user = {
        "name": nameInput.value,
        "email": emailInput.value,
        "dob": dobInput.value,
        "password": passwordInput.value,
        "role": "visitor"
    }

    const data = await create(URL_USERS, user);
    alert(data["name"]+" is already registered");
};
