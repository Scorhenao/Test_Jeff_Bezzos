import { URL_USERS } from "./routes.js";
import { read } from "./fetch.js";

(() => {
    const userId = localStorage.getItem("userId");
    const userData = read(`${URL_USERS}/${userId}`);
    
    /**If the user not belongs to noone user, avoid the access to re private route */
    if (userData) {
        alert(`¡No estas logeado!`);
        /**redirect to the home */
        window.location = "../index.html"
    }

    /**Get the sign in user in localStorage */
    const path = window.location.pathname
    /**Verificate if the Id belong to this user */
    const file = path.substring(path.lastIndexOf("/")+1);

    //Example string methods
    /* ("/view/register.html").lastIndexOf("/") *///return the last concidence with the string with their index
    /* ("/view/register.html").subString()*///recieve a initial index and a finish index, and is inmutable

    /**Private routes */
    //admin routes
    const routeAdmin = ["admin.html", "register.html"];
    //visitor routes
    const routeVisitor = ["visitor.html"];

    /**If the user not belongs to no one user, avoid the access to re private route */
    switch (userData["role"]) {
        case "admin":
                if (!routeAdmin.includes(file)) {
                    alert("¡No tienes permiso!");
                    window.location.href = "../views/login.html";
                }
            break;
        case "visitor":
                if (!routeVisitor.includes(file)) {
                    alert("¡No tienes permiso!");
                    window.location.href = "../views/login.html";
                }
            break;
        default:
            alert("¡Roles invalidos!");
            /**redirect to the home */
            window.location.href = "../views/login.html";
            break;
    }
}
)()