import { read } from "./fetch.js";
import { URL_USERS } from "./route.js";

(() => {

    const userId = localStorage.getItem("userId");
    const userData = read(`${URL_USERS}/${userId}`)

    if (userData) {
        alert("NO ESTAS LOGUEADO");
        window.location.href = "../index.html"
    }

    const path = window.location.pathname
    const file = path.substring(path.lastIndexOf("/")+1);
    /* ("/view/register.html").lastIndexOf("/") */
    /* ("/view/register.html").substring(2) */

    const routeAdmin = ["admin.html", "register.html"]
    const routeVisitor = ["visitor.html"]

    switch (userData["role"]) {
        case "admin":
                
            break;

        case "visitor":

            break;

        default:
            break;
    }

}
)()