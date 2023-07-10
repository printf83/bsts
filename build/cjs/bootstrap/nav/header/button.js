"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.button = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const mergeObject_js_1 = require("../../../core/mergeObject.js");
const uuid_js_1 = require("../../../core/uuid.js");
const button_js_1 = require("../../../html/button.js");
const handleActive = (event) => {
    const target = event.target.closest(".nav-link");
    const container = target.closest(".nav");
    if (container) {
        let lastCurrent = "";
        const lastActive = container?.querySelector(".nav-link.active");
        if (lastActive) {
            lastCurrent = lastActive.getAttribute("aria-current");
            lastActive.removeAttribute("aria-current");
            lastActive.classList.remove("active");
            container.dispatchEvent(new CustomEvent("change.bs.nav", {
                detail: {
                    target: target,
                    relatedTarget: lastActive,
                },
            }));
        }
        else {
            container.dispatchEvent(new CustomEvent("change.bs.nav", {
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
    switch (attr.toggle) {
        case "dropdown":
            attr.role ??= "button";
            break;
        case "pill":
        case "tab":
            attr.role ??= "tab";
            break;
        default:
    }
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
        id: attr.id || (0, uuid_js_1.UUID)(),
        class: [
            "nav-link",
            attr.active ? "active" : undefined,
            attr.toggle === "dropdown" ? "dropdown-toggle" : undefined,
        ],
        aria: {
            selected: attr.active ? "true" : "false",
        },
        role: attr.role,
        data: {
            "bs-target": attr.target,
            "bs-toggle": attr.toggle,
        },
    }, attr);
    delete attr.handleActive;
    delete attr.active;
    delete attr.toggle;
    delete attr.target;
    return attr;
};
class button extends button_js_1.button {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.button = button;
const Button = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(button, AttrOrElem, Elem);
exports.Button = Button;
