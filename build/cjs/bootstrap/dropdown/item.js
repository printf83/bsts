"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.item = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const a_js_1 = require("../../html/a.js");
const handleActive = (event) => {
    const target = event.target.closest(".dropdown-item");
    const container = target.closest(".dropdown-menu");
    if (container) {
        let lastCurrent = "";
        const lastActive = container?.querySelector(".dropdown-item.active");
        if (lastActive) {
            lastCurrent = lastActive.getAttribute("aria-current");
            lastActive.removeAttribute("aria-current");
            lastActive.classList.remove("active");
            container.dispatchEvent(new CustomEvent("change.bs.menu", {
                detail: {
                    target: target,
                    relatedTarget: lastActive,
                },
            }));
        }
        else {
            container.dispatchEvent(new CustomEvent("change.bs.menu", {
                detail: {
                    target: target,
                    relatedTarget: null,
                },
            }));
        }
        target.setAttribute("aria-current", lastCurrent ? lastCurrent : "page");
        target.classList.add("active");
    }
};
const convert = (attr) => {
    //handle item active
    if (attr.handleActive) {
        if (attr.on) {
            if (!attr.on.click) {
                attr.on["click"] = handleActive;
            }
        }
        else {
            attr.on = {
                click: handleActive,
            };
        }
    }
    attr = (0, mergeObject_js_1.mergeObject)({
        class: ["dropdown-item", attr.active ? "active" : undefined],
        aria: { current: attr.active ? (attr.current ? attr.current : "true") : undefined },
    }, attr);
    delete attr.handleActive;
    delete attr.active;
    delete attr.current;
    return attr;
};
class item extends a_js_1.a {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.item = item;
const Item = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(item, AttrOrElem, Elem);
exports.Item = Item;
