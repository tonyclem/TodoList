'use strict';

import { initWelcomeElement } from './pages/welcomePages.js';

const loadApp = () => {
  initWelcomeElement();
};

window.onload = loadApp;
