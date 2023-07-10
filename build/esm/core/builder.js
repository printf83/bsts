import { attachAttr } from "./attach/_index.js";
import { isTag, isHtml } from "./tag.js";
import { markup } from "./markup.js";
const htmlToElement = (strHTML) => {
    //TODO: ths using template. need to check if template is working
    var template = document.createElement("div");
    strHTML = strHTML.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = strHTML;
    return template.firstChild;
};
const processElem = (i, e, element) => {
    if (i !== null) {
        if (isTag(i)) {
            let t = build(element, i);
            element = t ? t : element;
        }
        else if (isHtml(i)) {
            let t = build(element, i);
            element = t ? t : element;
        }
        else {
            //only pre is html
            let typeofI = typeof i;
            let g = "";
            if (typeofI === "number") {
                g = i.toString();
            }
            else if (typeofI === "string") {
                g = i;
            }
            else {
                throw new Error(`Unsupported element type:${typeofI}`);
            }
            if (e.tag === "pre" || e.tag === "code") {
                element.insertAdjacentText("beforeend", g.replace(/\`/g, "'"));
            }
            else {
                let m = markup(g);
                if (typeof m === "string") {
                    element.appendChild(document.createTextNode(g));
                }
                else {
                    m.forEach((j) => {
                        element = processElem(j, e, element);
                    });
                }
            }
        }
    }
    return element;
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
                                element = processElem(i, e, element);
                            });
                        }
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
                    else if (isHtml(h)) {
                        let element = htmlToElement(h.elem);
                        if (element) {
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
                }
            });
        }
    }
    return container;
};
export const getNode = (arg) => {
    let container = build(document.createElement("div"), arg);
    let childCount = container.childElementCount;
    if (childCount === 0)
        return null;
    if (childCount === 1)
        return container.firstChild;
    return Array.from(container.childNodes).map((i) => i);
};
export const getHtml = (arg) => {
    let container = build(document.createElement("div"), arg);
    let result = container.innerHTML;
    removeElement(container);
    return result;
};
export const appendChild = (container, arg) => {
    container = build(container, arg);
    return container;
};
export const prependChild = (container, arg) => {
    container = build(container, arg, false);
    return container;
};
export const removeElement = (elem) => {
    if (elem.nodeType !== 3) {
        const listOfElem = elem.getElementsByClassName("bs-destroy-event");
        if (listOfElem && listOfElem.length > 0) {
            while (elem.firstChild) {
                removeElement(elem.firstChild);
            }
        }
        // while (elem.firstChild) {
        // 	removeElement(elem.firstChild as Element);
        // }
    }
    elem.remove();
};
export const replaceWith = (elem, arg) => {
    let parent = elem.parentNode;
    if (parent) {
        parent = build(parent, arg, true, elem);
        removeElement(elem);
        return parent;
    }
};
export const replaceChild = (container, arg) => {
    while (container.firstChild) {
        removeElement(container.firstChild);
    }
    container = build(container, arg);
    return container;
};
