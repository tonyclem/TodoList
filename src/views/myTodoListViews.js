export const todoListViews = () => {
    const element = document.createElement('div');

    element.innerHTML = String.raw` 
        <div class="all-tasks">
            <h2 class="task-list-title">My List</h2>
            <ul class="task-list" data-lists></ul>

            <form action="" data-new-list-form>
                <input
                    type="text"
                    class="new list"
                    data-new-list-input
                    placeholder="new list name"
                    aria-label="new list name"
                />

                <button class="btn create" aria-label="create new list">+</button>
            </form>
        </div>
    `;
    return element;
};
