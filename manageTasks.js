let tempInputDate = new Date();
let currentDate = tempInputDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
let tasks = [
    {
        id     :  generateId(),
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  currentDate,
        priority: "low",
        project: "default",
        done   : false,
    },
    {
        id     :  generateId(),
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  currentDate,
        priority: "low",
        project: "default",
        done   : false,
    },
    {
        id     :  generateId(),
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  currentDate,
        priority: "low",
        project: "default",
        done   : false,
    },
    {
        id     :  generateId(),
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  currentDate,
        priority: "low",
        project: "default",
        done   : false,
    }
];

function generateId() {
    return Date.now() + Math.floor(Math.random() * 10000);
}

// Function to add a new task
function addTask(title, note, date, priority, project ,done) {
    const newTask = {
        id: generateId(),
        title,
        note,
        date,
        priority,
        project,
        done,
    };
    console.log(newTask);
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

// function findIdIndex(value, index, tasks) {
//     return value.id 
// }

function changeStatus(id) {
    let index = tasks.findLastIndex(x => x.id == id);
    tasks[index].done = !tasks[index].done;
    // console.log(index);
    // console.log(tasks[index]);
}

// Export the functions and tasks array
export { tasks, addTask, removeTasks, getAllTasks, changeStatus };