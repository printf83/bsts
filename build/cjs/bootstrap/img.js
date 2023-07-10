"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Img = exports.img = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const tag_js_1 = require("../core/tag.js");
const img_js_1 = require("../html/img.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [attr.fluid ? "img-fluid" : undefined, attr.thumbnail ? "img-thumbnail" : undefined],
    }, attr);
    delete attr.fluid;
    delete attr.thumbnail;
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
