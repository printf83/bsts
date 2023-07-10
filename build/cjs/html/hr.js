"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hr = exports.hr = void 0;
const tag_js_1 = require("../core/tag.js");
class hr extends tag_js_1.tag {
    constructor(...arg) {
        super("hr", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.hr = hr;
const Hr = (Attr) => (0, tag_js_1.genTagClass)(hr, Attr);
exports.Hr = Hr;
