import { attachAttr } from "../attach/_index.js";
import { isTag } from "../base/tag.js";
import { removeChildElement } from "./removeChildElement.js";
import { removeElement } from "./removeElement.js";
import { setting } from "./setting.js";
export const init = (container) => {
    const popoverTriggerList = container.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].map((popoverTriggerEl) => new window.bootstrap.Popover(popoverTriggerEl));
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map((tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl));
};
export const build = (container, arg, append = true, beforeElem = null) => {
    if (arg) {
        arg = Array.isArray(arg) ? arg : [arg];
        if (arg.length > 0) {
            arg.forEach((h) => {
                if (h !== null) {
                    if (isTag(h)) {
                        let e = h;
                        let element = e.attr
                            ? attachAttr(document.createElement(e.tag), e.attr)
                            : document.createElement(e.tag);
                        if (e.elem) {
                            e.elem = Array.isArray(e.elem) ? e.elem : [e.elem];
                            e.elem.forEach((i) => {
                                if (i !== null) {
                                    if (isTag(i)) {
                                        let t = build(element, i);
                                        element = t ? t : element;
                                    }
                                    else {
                                        //all text treat as html
                                        // element.insertAdjacentHTML("beforeend", i as string);
                                        //only pre is html
                                        let g = i;
                                        if (e.tag === "pre") {
                                            // element.insertAdjacentHTML("beforeend", "\n" + g + "\n");
                                            element.insertAdjacentHTML("beforeend", g);
                                        }
                                        else {
                                            // element.appendChild(document.createTextNode("\n" + g + "\n"));
                                            element.appendChild(document.createTextNode(g));
                                        }
                                    }
                                }
                            });
                        }
                        e.dom = element;
                        if (append) {
                            if (beforeElem) {
                                container.insertBefore(element, beforeElem);
                            }
                            else {
                                container.appendChild(element);
                            }
                        }
                        else {
                            if (container.childElementCount > 0) {
                                if (beforeElem) {
                                    container.insertBefore(element, beforeElem);
                                    beforeElem = element;
                                }
                                else {
                                    container.insertBefore(element, container.firstChild);
                                }
                            }
                            else {
                                container.appendChild(element);
                            }
                        }
                    }
                }
            });
        }
    }
    return container;
};
export const node = (arg) => {
    let container = build(document.createElement("div"), arg);
    let childCount = container.childElementCount;
    if (childCount === 0)
        return null;
    if (childCount === 1)
        return container.firstChild;
    return Array.from(container.childNodes).map((i) => i);
};
export const html = (arg) => {
    let container = build(document.createElement("div"), arg);
    let result = container.innerHTML;
    removeElement(container);
    return result;
};
export const appendChild = (container, arg) => {
    if (setting.DEBUG)
        console.time("appendChild");
    container = build(container, arg);
    if (setting.DEBUG)
        console.timeEnd("appendChild");
    return container;
};
export const prependChild = (container, arg) => {
    if (setting.DEBUG)
        console.time("prependChild");
    container = build(container, arg, false);
    if (setting.DEBUG)
        console.timeEnd("prependChild");
    return container;
};
export const replaceWith = (elem, arg) => {
    if (setting.DEBUG)
        console.time("replaceWith");
    let parent = elem.parentNode;
    parent = build(parent, arg, true, elem);
    removeElement(elem);
    if (setting.DEBUG)
        console.timeEnd("replaceWith");
    return parent;
};
export const replaceChild = (container, arg) => {
    if (setting.DEBUG)
        console.time("replaceChild");
    removeChildElement(container);
    container = build(container, arg);
    if (setting.DEBUG)
        console.timeEnd("replaceChild");
    return container;
};
