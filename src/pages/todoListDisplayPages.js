// import { initWelcomeElement } from "../views/welcomeViews.js";
import { USER_INTERFACE_ID } from "../constants.js";
import { todoListDisplayFunc } from "../views/todoListDisplayViews.js"; 

export const todoListDisplayPageFunc = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const element = todoListDisplayFunc();
    userInterface.appendChild(element);
}