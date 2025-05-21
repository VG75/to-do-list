import { formatDate, getAllProjects} from "./manageTasks.js";  


const mainContainer = document.querySelector(".main-container");  
const projectContainer = document.querySelector(".project-container");
function addTask(value, taskContainer) {
    const div = document.createElement("div");
    div.classList.add("task-item");
    div.dataset.id = value.id;
    
    // Determine the badge class based on priority
    let badgeClass = "success"; // Default (for low)
    
    if (value.priority.toLowerCase() === "medium") {
        badgeClass = "warning";
    } else if (value.priority.toLowerCase() === "high") {
        badgeClass = "danger";
    }
    
    // Check if the task is completed
    const isCompleted = value.done === true;
    
    // Add completed class to the div if the task is completed
    if (isCompleted) {
        div.classList.add("completed-task");
    }
    
    div.innerHTML = `<div class="task-checkbox">
                        <input type="checkbox" class="checkbox" ${isCompleted ? 'checked' : ''}>
                    </div>
                    <div class="task-content">
                        <div class="task-header">
                            <h4 class="task-title ${isCompleted ? 'completed' : ''}">${value.title}</h4>
                            <div class="header-right">
                                <span class="badge ${badgeClass}">${value.priority}</span>
                                <div class="task-date">${formatDate(value.date)}</div>
                            </div>
                        </div>
                        <p class="task-description ${isCompleted ? 'completed' : ''}">${value.note}</p>
                        <div class="task-footer">
                            <span class="task-project">#${value.project}</span>
                            <div class="action-buttons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square action-icon" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash action-icon" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </div>
                        </div>
                    </div>`;
    
    taskContainer.appendChild(div);
    
    // Add event listener for checkbox changes to toggle completed status
    const checkbox = div.querySelector('.checkbox');
    checkbox.addEventListener('change', function() {
        const taskTitle = div.querySelector('.task-title');
        const taskDescription = div.querySelector('.task-description');
        
        if (this.checked) {
            div.classList.add('completed-task');
            taskTitle.classList.add('completed');
            taskDescription.classList.add('completed');
        } else {
            div.classList.remove('completed-task');
            taskTitle.classList.remove('completed');
            taskDescription.classList.remove('completed');
        }
    });
}  

function addProject(projectName, projectContainer) {
    const div = document.createElement("div");
    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                            </svg>
                            <button>${ projectName.charAt(0).toUpperCase() + projectName.slice(1) }</button>`
    
    projectContainer.appendChild(div);

}

function renderTasks(pageTitle, taskLists) {
    // Add error handling for when mainContainer might not be found
    if (!mainContainer) {
        console.error("Main container element not found!");
        return;
    }
    
    mainContainer.innerHTML = "";
    
    // Creating Elements
    const h2 = document.createElement("h2");
    const div = document.createElement("div");


    
    // Adding the title
    h2.textContent = pageTitle;
    mainContainer.appendChild(h2);
    
    div.classList.add("task-container");
    mainContainer.appendChild(div);
    
    // Pass the task container to addTask
    taskLists.forEach(task => addTask(task, div));


}

function renderProjects() {
    const projects = getAllProjects();
    projectContainer.innerHTML = "";
    
    // Creating Elements
    const h3 = document.createElement("h2");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");


    h3.textContent = "My Projects";
    projectContainer.appendChild(h3);

    div1.classList.add("home");
    projectContainer.appendChild(div1);

    projects.forEach(project => addProject(project, div1));

    div2.classList.add("home");
    div2.setAttribute('id', 'add-project');
    div2.innerHTML = `<div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                            <button id="add-btn">Add Project</button>
                        </div>`
    projectContainer.appendChild(div2);

}

export { renderTasks, renderProjects };