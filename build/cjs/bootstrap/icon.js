"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.icon = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const tag_js_1 = require("../core/tag.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const i_js_1 = require("../html/i.js");
const span_js_1 = require("../html/span.js");
const bubbleEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target;
    const a = target.closest("a");
    if (a) {
        a.click();
    }
    else {
        const button = target.closest("button");
        if (button) {
            button.click();
        }
    }
};
const convert = (attr) => {
    if (!attr.id && attr.elem && typeof attr.elem === "string") {
        attr.id = attr.elem;
        attr.elem = undefined;
    }
    if (!attr.type && attr.id && attr.id.indexOf(" ") > -1) {
        let sid = attr.id.split(" ");
        if (sid.length === 2) {
            switch (sid[0]) {
                case "bi":
                    attr.type = sid[0];
                    attr.id = sid[1];
                    break;
                default:
                    console.error("unsupported icon type", attr.id);
            }
        }
    }
    attr.type ??= "bi";
    if (attr.type === "bi") {
        attr = (0, mergeObject_js_1.mergeObject)({
            class: ["bi", attr.id ? `bi-${attr.id}` : undefined],
        }, attr);
    }
    delete attr.id;
    let handleBubble = attr.handleBubble;
    delete attr.handleBubble;
    if (attr.type === "bi") {
        delete attr.type;
        return {
            aria: { hidden: true },
            class: "bs-ico-bi",
            on: {
                click: handleBubble ? bubbleEvent : undefined,
            },
            elem: new i_js_1.i(attr),
            // data: { class: attr.class ? (Array.isArray(attr.class) ? attr.class.join(" ") : attr.class) : undefined },
        };
    }
    else {
        delete attr.type;
        return {
            aria: { hidden: true },
            class: "bs-ico-unknow",
            on: {
                click: handleBubble ? bubbleEvent : undefined,
            },
            elem: new i_js_1.i(attr),
            // data: { class: attr.class ? (Array.isArray(attr.class) ? attr.class.join(" ") : attr.class) : undefined },
        };
    }
};
const genStaticIcon = (t, i, a) => {
    if (a) {
        delete a.type;
        delete a.id;
        return new icon((0, mergeObject_js_1.mergeObject)({ type: t, id: i }, a));
    }
    else {
        return new icon({ type: t, id: i });
    }
};
class icon extends span_js_1.span {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
    static bi = (i, attr) => genStaticIcon("bi", i, attr);
}
exports.icon = icon;
const Icon = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(icon, AttrOrElem, Elem);
exports.Icon = Icon;
