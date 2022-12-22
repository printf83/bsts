import { UUID } from "./uuid.js";
import { detachEventListener } from "./detachEventListener.js";

export const loadcss = (url: string, callback?: Function): void => {
	
	let head = document.getElementsByTagName("head")[0];
	let link = document.createElement("link");
	let id = UUID();

	link.id = id;
	link.type = "text/css";
	link.rel = "stylesheet";

	link.onload = () => {
		let elem = document.getElementById(id);
		if (elem) {
			//TODO:setupeventlistenerremover
			detachEventListener(elem);
			elem.remove();
		}

        if (typeof callback === "function") {
            callback();    
        }
	};

	link.href = url;
	head.appendChild(link);
};