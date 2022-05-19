'use strict';

import { BUTTON_ID, CONTAINER_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeViews.js';
import { todoListPageFunc } from '../page/todoListPage.js';

export const initWelcomePage = () => {
  const container = document.getElementById(CONTAINER_ID);
  container.innerHTML = '';

  const element = createWelcomeElement();
  container.appendChild(element);

  document.getElementById(BUTTON_ID).addEventListener('click', gotoTodoPage);
};

const gotoTodoPage = () => {
  todoListPageFunc();
};
