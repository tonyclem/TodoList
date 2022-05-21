import { createWelcomePage } from '../views/welcomeViews.js';
import { BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';
import { todoListPages } from "../pages/myTodoListPages.js";
 
export const initWelcomeElement = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const element = createWelcomePage();
  userInterface.appendChild(element);

  document.getElementById(BUTTON_ID).addEventListener('click', goTodoListPage);
};

const goTodoListPage = () => {
  todoListPages();
};
