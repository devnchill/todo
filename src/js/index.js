import "/src/css/layout.css";
import "./themeSwitch";
import { listenersToHome } from "./eventListener/homeListener";
import { listenersToTodo } from "./eventListener/todoListener";
import { dom } from "./dom";
dom.displayAllProjects();
listenersToHome();
listenersToTodo();
