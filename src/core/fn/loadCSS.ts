import { UUID } from "./uuid.js";

export const loadCSS = (url: string, callback?: Function): void => {
	let head = document.getElementsByTagName("head")[0];
	let link = document.createElement("link");
	let id = UUID();

	link.id = id;
	link.type = "text/css";
	link.rel = "stylesheet";

	let fnOnload = () => {
		let elem = document.getElementById(id);
		if (elem) {
			elem.removeEventListener("load", fnOnload, false);
			elem.remove();
		}

		if (typeof callback === "function") {
			callback();
		}
	};

	link.onload = fnOnload;

	link.href = url;
	head.appendChild(link);
};
