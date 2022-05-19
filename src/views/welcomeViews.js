'use strict';

import { BUTTON_ID } from '../constants.js';

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`

    <div class="text">
        <h1>Welcome to Schuld List</h1>
        <h2>shopping List</h2>
        <button id="${BUTTON_ID}" class="btn">let go</button>
    </div>
`;
  return element;
};