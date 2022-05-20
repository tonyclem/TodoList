import { initWelcomeElement } from "../views/welcomeViews.js";
import { BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';

export const createWelcomePage = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const element = initWelcomeElement();
    userInterface.appendChild(element);


}