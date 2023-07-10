"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Img = exports.img = void 0;
const tag_js_1 = require("../../core/tag.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const img_js_1 = require("../../bootstrap/img.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const convert = (attr) => {
    if (attr.location) {
        attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [`card-img-${attr.location}`]);
    }
    delete attr.location;
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
