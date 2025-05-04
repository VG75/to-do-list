import { removeTasks, changeStatus, addTask, editTask, tasks } from "./manageTasks.js";
import { renderTasks } from "./renderPage.js";

let isEditing = false;
let editId = null;

const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");
const mainContainer = document.querySelector(".main-container");
const form = document.querySelector("form");

const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;

// Open the dialog when "Add Task" button is clicked
showDialogBtn?.addEventListener("click", () => dialog.showModal());

// Close and reset form on cancel
cancelBtn?.addEventListener("click", () => {
  form.reset();
  dialog.close();
});

// Handle form submission (add or edit)
form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form);
    const title    = formData.get('title');
    const notes    = formData.get('Task-discription');
    const date     = form.querySelector('#date').value;    // format: YYYY-MM-DD
    const priority = formData.get('Prority');  
    const project  = formData.get('projects'); 

    console.log({ title, notes, date, priority, project });

    if (isEditing) {
        editTask(editId, title, notes, date, priority, project, false);
        isEditing = false;
        editId     = null;
    } else {
        addTask(title, notes, date, priority, project, false);
    }

    form.reset();
    dialog.close();
    renderTasks("All Tasks", tasks);
});

// Event delegation on main container for checkbox, edit, and delete
mainContainer.addEventListener('click', e => {
    const el = e.target;
    const taskDiv = el.closest('.task-item');
    if (!taskDiv) return;
    const id = Number(taskDiv.dataset.id);

    // Delete
    if (el.matches('.bi-trash')) {
        removeTasks(id);
        renderTasks("All Tasks", tasks);
        return;
    }

  // Edit
  if (el.matches('.bi-pencil-square')) {
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        isEditing = true;
        editId    = id;

        form.querySelector('#task-name').value = task.title;
        form.querySelector('#Notes').value     = task.note;
        form.querySelector('#date').value      = task.date;
        form.querySelector('#Prority').value   = task.priority;
        form.querySelector('#projects').value  = task.project.toLowerCase();

        dialog.showModal();
        return;
    }
});

// Separate listener for checkbox change
mainContainer.addEventListener('change', (e) => {
    console.log(e.target);
    if (!e.target.matches('.checkbox')) return;
    const taskDiv = e.target.closest('.task-item');
    const id = Number(taskDiv.dataset.id);
    console.log(taskDiv);
    // Toggle strikethrough
    const titleEl = taskDiv.querySelector('.task-title');
    const descEl  = taskDiv.querySelector('.task-description');
    titleEl.style.textDecoration = e.target.checked ? 'line-through' : 'none';
    descEl.style.textDecoration  = e.target.checked ? 'line-through' : 'none';

    changeStatus(id);
});

// Initial render and wiring
renderTasks("All Tasks", tasks);
