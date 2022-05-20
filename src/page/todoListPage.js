'use strict';

import { todoListViewFunc } from '../views/todoListView.js';
import {
  CONTAINER_ID,
  DATA_LIST_FORM_ID,
  DATA_LISTS_ID,
  DATA_NEW_LIST_INPUT_ID,
} from '../constants.js';

export const todoListPageFunc = () => {
  const LOCAL_STORAGE_KEY = 'task.lists';
  const LOCAL_STORAGE_SELECTED_LIST_ID = 'task.selectedListId';
  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY || [])); // If it exist turn it to an object or to empty array
  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID);
  // let lists = [];
  const container = document.getElementById(CONTAINER_ID);
  container.innerHTML = '';

  const element = todoListViewFunc();
  container.appendChild(element);

  const dataListId = document.querySelector(`[${DATA_LISTS_ID}]`);
  const dataListFormId = document.querySelector(`[${DATA_LIST_FORM_ID}]`);
  const dataNewListInputId = document.querySelector(
    `[${DATA_NEW_LIST_INPUT_ID}]`
  );

  dataListId.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedListId = e.target.dataset.listId;
      saveFunction();
    }
  });

  // addlist function
  const newList = document.querySelector(`[${DATA_NEW_LIST_INPUT_ID}]`);

  dataListFormId.addEventListener('submit', (event) => {
    event.preventDefault();
    const createNewList = newList.value;
    if (createNewList === null || createNewList === '') return;
    const list = createList(createNewList);
    newList.value = null;
    lists.push(list);
    saveFunction();
  });

  // create list function
  function createList(list) {
    return { id: Date.now().toString(), list: list, task: [] };
  }

  // show input function
  function showInput() {
    clearElement(dataListId);
    lists.forEach((list) => {
      const listElement = document.createElement('li');
      listElement.dataset.listId = list.id;
      listElement.innerHTML = list.list;
      if (list.id === selectedListId) {
        listElement.style.color = 'green';
      }
      dataListId.appendChild(listElement);
    });
  }

  dataNewListInputId.addEventListener('submit', showInput);

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function saveFunction() {
    saveToLocalStorage();
    showInput();
  }

  function saveToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists));
  }
};
