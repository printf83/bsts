"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = exports.picture = void 0;
const tag_js_1 = require("../core/tag.js");
class picture extends tag_js_1.tag {
    constructor(...arg) {
        super("picture", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.picture = picture;
const Picture = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(picture, AttrOrElem, Elem);
exports.Picture = Picture;
