"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.table = void 0;
const tag_js_1 = require("../core/tag.js");
class table extends tag_js_1.tag {
    constructor(...arg) {
        super("table", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.table = table;
const Table = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(table, AttrOrElem, Elem);
exports.Table = Table;
