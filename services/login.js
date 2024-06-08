import { URL_USERS } from "./routes.js";
import { read } from "./fetch.js";

/**Select the inputs and the form */ 
const email = document.getElementById('email1');
const password = document.getElementById('password1');
const loginForm = document.getElementById('loginForm');

/**Add event submit to the form to get the login of user an login him/her*/
loginForm.addEventListener("submit", async (e) =>{
    /**prevent the refresh of the page each time that user the button of login */
    e.preventDefault();

    /**verificate user with it email */
    const user = await read(URL_USERS + "?email="+email.value.toLowerCase());

    /**If exist an user with it email, validate if the password is the same saved
     * else if user don't exist, alert and not do nothing */
    if (user.length > 0 ) {
        if (user[0]["password"] == password.value) {
            /**If pass all the validations say login correct  */
            alert("Login correcto")

            /**pass the active session with the id that the user sign in */
            localStorage.setItem("userId",user[0]["id"])

            /**depend of the role redirect to the correspondent page */
            switch (user[0]["role"]) {
                case "admin":
                    window.location.href = "admin.html";
                    break;
                
                case "visitor":
                    window.location.href = "visitor.html";
                break;
            }
        }else{
            alert("Contraseña invalida")
        }
    }else{
        alert("Login incorrecto")
    }
})