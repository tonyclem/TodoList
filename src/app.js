'use strict';

import { initWelcomeElement } from './views/welcomeViews.js';

const loadApp = () => {
  initWelcomeElement();
};

window.onload = loadApp;
