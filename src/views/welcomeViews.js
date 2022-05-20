'use strict';

import { BUTTON_ID } from '../constants.js';

export const initWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
        <div class="welcome-container">
            <h1>Welcome to the To-Do List App!</h1>
            <p>Track Note</p>
        </div>

        <button id="${BUTTON_ID}">Start</button>
        `;
  return element;
};
