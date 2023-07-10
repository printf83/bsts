"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = exports.progress = void 0;
const tag_js_1 = require("../core/tag.js");
class progress extends tag_js_1.tag {
    constructor(...arg) {
        super("progress", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.progress = progress;
const Progress = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(progress, AttrOrElem, Elem);
exports.Progress = Progress;
