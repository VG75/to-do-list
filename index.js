import { renderTasks } from "./renderPage.js";

const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");
const mainContainer = document.querySelector(".main-container");

function generateId() {
    return Date.now() + Math.floor(Math.random() * 10000);
}

let tasks = [
    {
        id     :  generateId(),
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  "29 Apr 2025",
        time   : "low",
        project: "default",
    },
    {
        id     :  generateId(),
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  "29 Apr 2025",
        time   : "low",
        project: "default",
    },
    {
        id     :  generateId(),
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  "29 Apr 2025",
        time   : "low",
        project: "default",
    },
    {
        id     :  generateId(),
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  "29 Apr 2025",
        time   : "low",
        project: "default",
    }
];

// Initial render
renderTasks("All Tasks", tasks);
attachEventListeners();

// Function to attach event listeners to task elements
function attachEventListeners() {
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
            const id = Number(taskDiv.dataset.id);
            tasks = tasks.filter(task => task.id != id);
            taskDiv.remove();
            // renderTasks("All Tasks", tasks);
            // // Reattach event listeners after re-rendering
            // attachEventListeners();
        });
    });
}

// Dialog event handlers
showDialogBtn?.addEventListener("click", () => {
    dialog.showModal();
});

submitBtn?.addEventListener("click", () => {
    dialog.close();
});

cancelBtn?.addEventListener("click", () => {
    dialog.close();
});