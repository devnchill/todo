import "/src/css/layout.css";
import { format, parse } from "date-fns";

//used for toggling themes (light and dark) and adding bg img to Main if it's empty
import "./themeSwitch";

//adding event Listeners to different sections of webpage through their dedicated files
import { listenersToHome } from "./eventListener/homeListener";
import { listenersToTodo } from "./eventListener/todoListener";
import { listenersToProject } from "./eventListener/projectListener";
import { dom } from "./dom";
listenersToHome();
listenersToTodo();
listenersToProject();

//displays all project as soon as page loads
dom.displayAllProjects();
