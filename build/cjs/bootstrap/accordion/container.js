"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const uuid_js_1 = require("../../core/uuid.js");
const div_js_1 = require("../../html/div.js");
const item_js_1 = require("./item.js");
const header_js_1 = require("./header.js");
const body_js_1 = require("./body.js");
const convert = (attr) => {
    attr.id ??= (0, uuid_js_1.UUID)();
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, ["accordion", attr.flush ? "accordion-flush" : undefined]);
    //generate item
    if (attr.item && !attr.elem) {
        attr.item = Array.isArray(attr.item) ? attr.item : [attr.item];
        attr.elem = attr.item.map((i) => {
            let itemID = (0, uuid_js_1.UUID)();
            return new item_js_1.item([
                new header_js_1.header({
                    id: `heading-${itemID}`,
                    target: `#collapse-${itemID}`,
                    controlfor: `collapse-${itemID}`,
                    expanded: i.show,
                }, i.title),
                new body_js_1.body({
                    id: `collapse-${itemID}`,
                    parent: attr.alwaysOpen ? undefined : `#${attr.id}`,
                    show: i.show,
                }, i.elem),
            ]);
        });
    }
    delete attr.flush;
    delete attr.item;
    delete attr.alwaysOpen;
    return attr;
};
class container extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;
