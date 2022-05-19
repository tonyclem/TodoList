'use strict';

import { todoListViewFunc } from '../views/todoListView.js';
import { CONTAINER_ID } from '../constants.js';

export const todoListPageFunc = () => {
  const container = document.getElementById(CONTAINER_ID);
  container.innerHTML = 'hello Todo';
};
