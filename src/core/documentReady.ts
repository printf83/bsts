import { style } from "../html/style.js";
import { appendChild } from "./builder.js";
import { aColor } from "./css/aColor.js";
import { aHover } from "./css/aHover.js";
import { btnToggle } from "./css/btnToggle.js";
import { calendar } from "./css/calendar.js";
import { dropdownMenuStyle } from "./css/dropdownMenuStyle.js";
import { svgInLinkAndButton } from "./css/svgInLinkAndButton.js";
import { tableResponsive } from "./css/tableResponsive.js";
import { bstsConsole as console } from "./console.js";
// import { UUID } from "./uuid.js";

//set css on document ready
const setCSS = () => {
	const css = [
		btnToggle,
		dropdownMenuStyle,
		svgInLinkAndButton,
		tableResponsive("bs-title-name"),
		aHover,
		aColor(),
		calendar,
	].join("\n");

	if (!document.getElementById("bsts-css-container")) {
		appendChild(document.head, new style({ id: "bsts-css-container" }, css));
	}
};

//setup DOMInserted
// var BSTS_DOMWatcherID: string = ""; //GLOBAL
const setupDOMWatcher = () => {
	const observer = new MutationObserver(function (m) {
		if (m && m.length > 0) {
			m.forEach((n) => {
				if (n.addedNodes && n.addedNodes.length > 0) {
					const elem = (n.target as Element).querySelectorAll(".bs-build-event");
					if (elem && elem.length > 0) {
						elem.forEach((i) => {
							i.classList.remove("bs-build-event");
							i.dispatchEvent(new CustomEvent("build"));
						});
					}
				}
			});
		}
	});

	// const observer = new MutationObserver(function (m) {
	// 	if (m[0].addedNodes && m[0].addedNodes.length > 0) {
	// 		BSTS_DOMWatcherID = UUID();
	// 		setTimeout(
	// 			(id: string) => {
	// 				if (id === BSTS_DOMWatcherID) {
	// 					const elem = document.documentElement.querySelectorAll(".bs-build-event");
	// 					if (elem && elem.length > 0) {
	// 						elem.forEach((i) => {
	// 							i.classList.remove("bs-build-event");
	// 							i.dispatchEvent(new CustomEvent("build"));
	// 						});
	// 					}
	// 				} else {
	// 					console.log("DOMWatcherID change");
	// 				}
	// 			},
	// 			300,
	// 			BSTS_DOMWatcherID
	// 		);
	// 	}
	// });

	observer.observe(document.documentElement, {
		childList: true,
		subtree: true,
	});
};

//documentReady
const elemReady = (doc: Document, callback: Function) => {
	if (doc.readyState != "loading") {
		callback();
	} else {
		console.error("Cannot detect readyState");
		callback();
	}
};

let documentReadyTrigged = false;
export const documentReady = (callback: Function) => {
	if (!documentReadyTrigged) {
		documentReadyTrigged = true;
		elemReady(document, () => {
			setupDOMWatcher();
			setCSS();
			callback();
		});
	} else {
		console.warn("documentReady sould be called once");
	}
};
