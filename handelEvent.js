import { removeTasks } from "./manageTasks.js";

const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");
const mainContainer = document.querySelector(".main-container");

const attachEventListeners = function() {
    // Attach checkbox event listeners
    document.querySelectorAll('.task-checkbox').forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const task = e.target.closest('.task-item');
            const title = task.querySelector(".task-title");
            const note = task.querySelector(".task-description");
            title.style.textDecoration = e.target.checked ? "line-through" : "none";
            note.style.textDecoration = e.target.checked ? "line-through" : "none";
        });
    });

    // Attach delete event listeners
    document.querySelectorAll('.bi-trash').forEach((bin) => {
        bin.addEventListener('click', (e) => {
            const taskDiv = e.target.closest('.task-item');
            console.log(taskDiv);
            const id = Number(taskDiv.dataset.id);
            removeTasks(id);
            taskDiv.remove();
            // renderTasks("All Tasks", tasks);
            // // Reattach event listeners after re-rendering
            // attachEventListeners();
        });
    });

    
    showDialogBtn?.addEventListener("click", () => {
        dialog.showModal();
    });

    submitBtn?.addEventListener("click", () => {
        dialog.close();
    });

    cancelBtn?.addEventListener("click", () => {
        dialog.close();
    });
}

export { attachEventListeners }