import { create, read } from "./fetch.js";
import { URL_USERS } from "./routes.js";

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dobInput = document.getElementById('dob');
const passwordInput = document.getElementById('password');
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    validation();
})

async function validation() {
    const data = await read(`${URL_USERS}?email=${emailInput.value}`);
    if (data.length > 0) {
        alert("¡Email already registered!");
        return;
    }
    createUser();
}

async function createUser(){
    const user ={
        "name":nameInput.value,
        "email":emailInput.value,
        "dob":dobInput.value,
        "password":passwordInput.value,
        "role": "visitor"
    }
    const data = await create(URL_USERS,user);
    alert (data["name"]+"is already registered");

}

