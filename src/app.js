'use strict';

import { initWelcomePage } from './page/welcomePage.js';

const loadApp = () => {
  initWelcomePage();
};

window.addEventListener('load', loadApp);
