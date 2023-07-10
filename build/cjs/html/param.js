"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Param = exports.param = void 0;
const tag_js_1 = require("../core/tag.js");
class param extends tag_js_1.tag {
    constructor(...arg) {
        super("param", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.param = param;
const Param = (Attr) => (0, tag_js_1.genTagClass)(param, Attr);
exports.Param = Param;
