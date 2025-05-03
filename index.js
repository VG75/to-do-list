import { renderTasks } from "./renderPage.js";
import {attachEventListeners} from "./handelEvent.js";
import { tasks } from "./manageTasks.js";


renderTasks("All Tasks", tasks);
attachEventListeners();

const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;
