'use strict';

export const todoListViewFunc = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
        <div>
            <h1>My List Book </h1>
            <p>Hello World</p>
        </div>   
   `;
  return element;
};
