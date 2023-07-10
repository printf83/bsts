"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = exports.base = void 0;
const tag_js_1 = require("../core/tag.js");
class base extends tag_js_1.tag {
    constructor(...arg) {
        super("base", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.base = base;
const Base = (Attr) => (0, tag_js_1.genTagClass)(base, Attr);
exports.Base = Base;
