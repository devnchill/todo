import { dom } from "./dom";
import { attachEventListenersToProjects } from "./eventListener";
import "/src/css/layout.css";

dom.displayAllProjects();
dom.displayAllTodos();
attachEventListenersToProjects();
