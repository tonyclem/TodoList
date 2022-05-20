'use strict';

export const todoListViewFunc = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
        <div class="container-view">

            <h1>My List Book </h1>

            <ul class="schedule-list" data-lists></ul>
            
            <form data-list-form>
            <button class="btn-add">Add</button>
            <input data-new-list-input type="text"  class="input-text" placeholder="Your Schedule">
            </form> 
        </div>   
   `;
  return element;
};
