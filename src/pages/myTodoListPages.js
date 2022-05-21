import { todoListViews } from '../views/myTodoListViews.js';
import { USER_INTERFACE_ID } from '../constants.js';

export const todoListPages = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = ' ';

  const element = todoListViews();
  userInterface.appendChild(element);
};
