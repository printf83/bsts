"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceChild = exports.replaceWith = exports.removeElement = exports.prependChild = exports.appendChild = exports.getHtml = exports.getNode = exports.build = void 0;
const _index_js_1 = require("./attach/_index.js");
const tag_js_1 = require("./tag.js");
const markup_js_1 = require("./markup.js");
const htmlToElement = (strHTML) => {
    //TODO: ths using template. need to check if template is working
    var template = document.createElement("div");
    strHTML = strHTML.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = strHTML;
    return template.firstChild;
};
const processElem = (i, e, element) => {
    if (i !== null) {
        if ((0, tag_js_1.isTag)(i)) {
            let t = (0, exports.build)(element, i);
            element = t ? t : element;
        }
        else if ((0, tag_js_1.isHtml)(i)) {
            let t = (0, exports.build)(element, i);
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
                let m = (0, markup_js_1.markup)(g);
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
const build = (container, arg, append = true, beforeElem = null) => {
    if (arg) {
        arg = Array.isArray(arg) ? arg : [arg];
        if (arg.length > 0) {
            arg.forEach((h) => {
                if (h !== null) {
                    if ((0, tag_js_1.isTag)(h)) {
                        let e = h;
                        let element = e.attr
                            ? (0, _index_js_1.attachAttr)(document.createElement(e.tag), e.attr)
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
                    else if ((0, tag_js_1.isHtml)(h)) {
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
exports.build = build;
const getNode = (arg) => {
    let container = (0, exports.build)(document.createElement("div"), arg);
    let childCount = container.childElementCount;
    if (childCount === 0)
        return null;
    if (childCount === 1)
        return container.firstChild;
    return Array.from(container.childNodes).map((i) => i);
};
exports.getNode = getNode;
const getHtml = (arg) => {
    let container = (0, exports.build)(document.createElement("div"), arg);
    let result = container.innerHTML;
    (0, exports.removeElement)(container);
    return result;
};
exports.getHtml = getHtml;
const appendChild = (container, arg) => {
    container = (0, exports.build)(container, arg);
    return container;
};
exports.appendChild = appendChild;
const prependChild = (container, arg) => {
    container = (0, exports.build)(container, arg, false);
    return container;
};
exports.prependChild = prependChild;
const removeElement = (elem) => {
    if (elem.nodeType !== 3) {
        const listOfElem = elem.getElementsByClassName("bs-destroy-event");
        if (listOfElem && listOfElem.length > 0) {
            while (elem.firstChild) {
                (0, exports.removeElement)(elem.firstChild);
            }
        }
        // while (elem.firstChild) {
        // 	removeElement(elem.firstChild as Element);
        // }
    }
    elem.remove();
};
exports.removeElement = removeElement;
const replaceWith = (elem, arg) => {
    let parent = elem.parentNode;
    if (parent) {
        parent = (0, exports.build)(parent, arg, true, elem);
        (0, exports.removeElement)(elem);
        return parent;
    }
};
exports.replaceWith = replaceWith;
const replaceChild = (container, arg) => {
    while (container.firstChild) {
        (0, exports.removeElement)(container.firstChild);
    }
    container = (0, exports.build)(container, arg);
    return container;
};
exports.replaceChild = replaceChild;
