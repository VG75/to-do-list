import { removeTasks, changeStatus, addTask, editTask, tasks, getAllTasks, completedTasks, addProject, getAllProjects, filterTasks } from "./manageTasks.js";
import { renderProjects, renderTasks } from "./renderPage.js";

const handelSideContainerEvent = function() {
    const sideContainer = document.querySelector("#side-bar-container");
    let isEditing = false;
    let editId = null;
    
    // Task dialog elements
    const taskDialog = document.querySelector("dialog.form-div:not(.project-dialog)");
    const showTaskDialogBtn = document.querySelector(".add-btn");
    const cancelTaskBtn = document.querySelector(".cancel");
    const taskForm = taskDialog.querySelector("form");
    
    // Project dialog elements
    const projectDialog = document.querySelector("dialog.project-dialog");
    const cancelProjectBtn = projectDialog.querySelector(".cancel-project");
    const projectForm = projectDialog.querySelector("form");
    
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    // Open the task dialog when "Add Task" button is clicked
    showTaskDialogBtn?.addEventListener("click", () => taskDialog.showModal());
    
    // Close and reset task form on cancel
    cancelTaskBtn?.addEventListener("click", () => {
        taskForm.reset();
        taskDialog.close();
    });
    
    // Close and reset project form on cancel
    cancelProjectBtn?.addEventListener("click", () => {
        projectForm.reset();
        projectDialog.close();
    });

    // Handle form submission (add or edit)
    taskForm.addEventListener("submit", e => {
        e.preventDefault();
        const formData = new FormData(taskForm);
        const title    = formData.get('title');
        const notes    = formData.get('Task-discription');
        const date     = taskForm.querySelector('#date').value;    // format: YYYY-MM-DD
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

        taskForm.reset();
        taskDialog.close();
        renderTasks("All Tasks", tasks);
    });

     projectForm.addEventListener("submit", e => {
        e.preventDefault();
        const projectName = projectForm.querySelector('#project-name').value;
        
        if (projectName.trim() !== '') {
            const success = addProject(projectName);
            
            if (success) {
                console.log(`Project "${projectName}" added successfully`);
                // Update the project dropdown in the task form
                updateProjectsDropdown();
                // Re-render the projects sidebar
                renderProjects();
            } else {
                console.log(`Project "${projectName}" already exists`);
                alert(`Project "${projectName}" already exists`);
            }
        }
        
        projectForm.reset();
        projectDialog.close();
        
    });

    function updateProjectsDropdown() {
        const projectsDropdown = document.getElementById('projects');
        const projects = getAllProjects();
        
        // Clear current options
        projectsDropdown.innerHTML = '';
        
        // Add all projects to dropdown
        projects.forEach(project => {
            const option = document.createElement('option');
            option.value = project;
            option.textContent = project.charAt(0).toUpperCase() + project.slice(1);
            projectsDropdown.appendChild(option);
        });
    }




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
            projectDialog.showModal();
        }

        if (e.target.hasAttribute('data-project')) {

            const projectName = e.target.getAttribute('data-project');
            const filteredTasks = filterTasks(projectName);
            renderTasks(`${e.target.textContent} Tasks`, filteredTasks);
            return;
    }

    });
}

export { handelSideContainerEvent };