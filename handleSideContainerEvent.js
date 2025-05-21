import { removeTasks, changeStatus, addTask, editTask, tasks, getAllTasks, completedTasks } from "./manageTasks.js";
import { renderTasks } from "./renderPage.js";

const handelSideContainerEvent = function() {
    const sideContainer = document.querySelector("#side-bar-container");
    let isEditing = false;
    let editId = null;

    const dialog = document.querySelector("dialog");
    const showDialogBtn = document.querySelector(".add-btn");
    const cancelBtn = document.querySelector(".cancel");
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

    sideContainer.addEventListener("click", (e) => {
        const el = e.target;
        const targetDiv = el.closest('.home');
        console.log(el);
        if (!targetDiv) return;
        
        let newTask = [];

        if (el.matches('.all-list') || el.matches('#all')) {
            newTask = getAllTasks();
            renderTasks("All Tasks", newTask);
            console.log("Hi");

        } 
        console.log("Hello");
        if (el.matches('.completed-list') || el.matches('#completed')) {
            console.log("Hi!!!!");

            newTask = completedTasks();
            renderTasks("Completed Tasks", newTask);
            
        }

        if  (el.matches('#add-project') || el.matches('#add-btn')) {

        }

    });
}

export {handelSideContainerEvent};