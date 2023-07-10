"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Img = exports.img = void 0;
const tag_js_1 = require("../core/tag.js");
class img extends tag_js_1.tag {
    constructor(...arg) {
        super("img", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.img = img;
const Img = (Attr) => (0, tag_js_1.genTagClass)(img, Attr);
exports.Img = Img;
