"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Script = exports.script = void 0;
const tag_js_1 = require("../core/tag.js");
class script extends tag_js_1.tag {
    constructor(...arg) {
        super("script", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.script = script;
const Script = (Attr) => (0, tag_js_1.genTagClass)(script, Attr);
exports.Script = Script;
