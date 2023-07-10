"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = exports.dialog = void 0;
const tag_js_1 = require("../core/tag.js");
class dialog extends tag_js_1.tag {
    constructor(...arg) {
        super("dialog", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.dialog = dialog;
const Dialog = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(dialog, AttrOrElem, Elem);
exports.Dialog = Dialog;
