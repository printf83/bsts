"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.link = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const mergeObject_js_1 = require("../../../core/mergeObject.js");
const a_js_1 = require("../../../html/a.js");
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
    attr.current ??= "page";
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
        class: [
            "nav-link",
            attr.active ? "active" : undefined,
            attr.toggle === "dropdown" ? "dropdown-toggle" : undefined,
        ],
        aria: {
            current: attr.active ? (attr.current === true ? "true" : attr.current) : undefined,
            expanded: attr.toggle === "dropdown" ? "false" : undefined,
        },
        role: attr.role,
        data: { "bs-toggle": attr.toggle },
    }, attr);
    delete attr.handleActive;
    delete attr.current;
    delete attr.active;
    delete attr.toggle;
    return attr;
};
class link extends a_js_1.a {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.link = link;
const Link = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(link, AttrOrElem, Elem);
exports.Link = Link;
