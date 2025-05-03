import { renderTasks } from "./renderPage.js";
import {attachEventListeners} from "./handelEvent.js";
import { tasks } from "./manageTasks.js";


renderTasks("All Tasks", tasks);
attachEventListeners();




