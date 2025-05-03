import { removeTasks, changeStatus, addTask, tasks } from "./manageTasks.js";
import { renderTasks } from "./renderPage.js";

const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;

const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");
const mainContainer = document.querySelector(".main-container");
const form = document.querySelector("form");

const attachEventListeners = function() {
    // Attach checkbox event listeners
    document.querySelectorAll('.task-checkbox').forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const task = e.target.closest('.task-item');
            const id = Number(task.dataset.id);
            const title = task.querySelector(".task-title");
            const note = task.querySelector(".task-description");
            title.style.textDecoration = e.target.checked ? "line-through" : "none";
            note.style.textDecoration = e.target.checked ? "line-through" : "none";
            changeStatus(id);
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

    // submitBtn?.addEventListener("click", () => {
    //     dialog.close();
    // });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        let title = formData.get('title');
        let notes = formData.get('Task-discription');
        let priority = form.querySelector('#Prority').value;
        let project = form.querySelector('#projects').value;
        const inputDate =  form.querySelector('#date').value// from input type="date"
        let date = new Date(inputDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
        console.log(date);
        
        addTask(title, notes, date, priority, project,false);
        
        dialog.close();
        
        renderTasks("All Tasks", tasks);
        attachEventListeners();


        // const task = {
        //     title: formData.get('title'),
        //     notes: formData.get('Task-discription'),
        //     dueDate: form.querySelector('#date').value,
        //     priority: form.querySelector('#Prority').value,
        //     project: form.querySelector('#projects').value,
        // };

        //console.log(task);
    });

    cancelBtn?.addEventListener("click", () => {
        dialog.close();
    });
}

export { attachEventListeners }