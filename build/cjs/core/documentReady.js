"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentReady = void 0;
const style_js_1 = require("../html/style.js");
const builder_js_1 = require("./builder.js");
const aColor_js_1 = require("./css/aColor.js");
const main_js_1 = require("./css/main.js");
const btnToggle_js_1 = require("./css/btnToggle.js");
const calendar_js_1 = require("./css/calendar.js");
const dropdownMenuStyle_js_1 = require("./css/dropdownMenuStyle.js");
const svgInLinkAndButton_js_1 = require("./css/svgInLinkAndButton.js");
const tableResponsive_js_1 = require("./css/tableResponsive.js");
const console_js_1 = require("./console.js");
const eventManager_js_1 = require("./eventManager.js");
const mutationObserverManager_js_1 = require("./mutationObserverManager.js");
const animation_js_1 = require("./css/animation.js");
const transform_js_1 = require("./css/transform.js");
//set css on document ready
const setCSS = () => {
    const css = [
        btnToggle_js_1.btnToggle,
        dropdownMenuStyle_js_1.dropdownMenuStyle,
        svgInLinkAndButton_js_1.svgInLinkAndButton,
        (0, tableResponsive_js_1.tableResponsive)("bs-title-name"),
        main_js_1.main,
        (0, aColor_js_1.aColor)(),
        calendar_js_1.calendar,
        (0, animation_js_1.animation)(),
        (0, transform_js_1.transform)(),
    ].join("\n");
    if (!document.getElementById("bsts-css-container")) {
        (0, builder_js_1.appendChild)(document.head, new style_js_1.style({ id: "bsts-css-container" }, css));
    }
};
const dispatchDestroyEvent = (elem) => {
    if (elem.nodeType !== 3) {
        if (elem.classList.contains("bs-destroy-event")) {
            elem.dispatchEvent(new CustomEvent("destroy"));
            (0, eventManager_js_1.removeEvent)(elem);
        }
    }
};
const dispatchBuildEvent = (elem) => {
    if (elem.nodeType !== 3) {
        const listOfElem = elem.getElementsByClassName("bs-build-event");
        if (listOfElem && listOfElem.length > 0) {
            Array.from(listOfElem).forEach((i) => {
                i.classList.remove("bs-build-event");
                i.dispatchEvent(new CustomEvent("build"));
            });
        }
        if (elem.classList.contains("bs-build-event")) {
            elem.classList.remove("bs-build-event");
            elem.dispatchEvent(new CustomEvent("build"));
        }
    }
};
//setup DOMInserted
const setupDOMWatcher = () => {
    // const observer = new MutationObserver(function (m) {
    // 	if (m && m.length > 0) {
    // 		m.forEach((n) => {
    // 			//check remove node
    // 			if (n.removedNodes && n.removedNodes.length > 0) {
    // 				n.removedNodes.forEach((i) => {
    // 					dispatchDestroyEvent(i as Element);
    // 				});
    // 			}
    // 			//check added node
    // 			if (n.addedNodes && n.addedNodes.length > 0) {
    // 				n.addedNodes.forEach((i) => {
    // 					dispatchBuildEvent(i as Element);
    // 				});
    // 			}
    // 		});
    // 	}
    // });
    // observer.observe(document.documentElement, {
    // 	childList: true,
    // 	subtree: true,
    // });
    (0, mutationObserverManager_js_1.observeMutationObserver)(document.documentElement, function (mutation) {
        if (mutation && mutation.length > 0) {
            mutation.forEach((mutationNode) => {
                //check remove node
                if (mutationNode.removedNodes && mutationNode.removedNodes.length > 0) {
                    mutationNode.removedNodes.forEach((i) => {
                        dispatchDestroyEvent(i);
                    });
                }
                //check added node
                if (mutationNode.addedNodes && mutationNode.addedNodes.length > 0) {
                    mutationNode.addedNodes.forEach((i) => {
                        dispatchBuildEvent(i);
                    });
                }
            });
        }
    }, { childList: true, subtree: true });
};
//documentReady
const elemReady = (doc, callback) => {
    if (doc.readyState != "loading") {
        callback();
    }
    else {
        console_js_1.bstsConsole.error("Cannot detect readyState");
        callback();
    }
};
let documentReadyTrigged = false;
const documentReady = (callback) => {
    if (!documentReadyTrigged) {
        documentReadyTrigged = true;
        elemReady(document, () => {
            setupDOMWatcher();
            setCSS();
            callback();
        });
    }
    else {
        console_js_1.bstsConsole.warn("documentReady sould be called once");
    }
};
exports.documentReady = documentReady;
