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

function generateId() {
    return Date.now() + Math.floor(Math.random() * 10000);
}

// Function to add a new task
function addTask(title, note, date, time, project = "default") {
    const newTask = {
        id: generateId(),
        title,
        note,
        date,
        time,
        project
    };
    
    tasks.push(newTask);
    return newTask;
}

// Function to remove a task by ID
function removeTasks(id) {
    tasks = tasks.filter(task => task.id != id);
}

// Function to get all tasks
function getAllTasks() {
    return tasks;
}

// Export the functions and tasks array
export { tasks, addTask, removeTasks, getAllTasks };