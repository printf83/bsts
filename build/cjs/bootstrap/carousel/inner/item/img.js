"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Img = exports.img = void 0;
const tag_js_1 = require("../../../../core/tag.js");
const bootstrap_js_1 = require("../../../../core/bootstrap.js");
const img_js_1 = require("../../../img.js");
const convert = (attr) => {
    attr.display = "block";
    attr.width = 100;
    return attr;
};
class img extends img_js_1.img {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("src", arg)));
    }
}
exports.img = img;
const Img = (AttrOrSrc, Src) => (0, tag_js_1.genTagClass)(img, AttrOrSrc, Src);
exports.Img = Img;
