"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.itemDiv = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const div_js_1 = require("../../html/div.js");
const handleActive = (event) => {
    const target = event.target.closest(".list-group-item");
    const container = target.closest(".list-group");
    if (container) {
        const lastActive = container?.querySelector(".list-group-item.active");
        if (lastActive) {
            lastActive.classList.remove("active");
            container.dispatchEvent(new CustomEvent("change.bs.list", {
                detail: {
                    target: target,
                    relatedTarget: lastActive,
                },
            }));
        }
        else {
            container.dispatchEvent(new CustomEvent("change.bs.list", {
                detail: {
                    target: target,
                    relatedTarget: null,
                },
            }));
        }
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
        class: [
            "list-group-item",
            attr.action ? "list-group-item-action" : undefined,
            attr.color ? `list-group-item-${attr.color}` : undefined,
            attr.active ? "active" : undefined,
            attr.disabled ? "disabled" : undefined,
        ],
        aria: { disabled: attr.disabled ? "true" : undefined },
    }, attr);
    delete attr.handleActive;
    delete attr.active;
    delete attr.disabled;
    delete attr.action;
    delete attr.color;
    return attr;
};
class itemDiv extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.itemDiv = itemDiv;
const Item = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(itemDiv, AttrOrElem, Elem);
exports.Item = Item;
