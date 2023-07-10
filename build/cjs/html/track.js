"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = exports.track = void 0;
const tag_js_1 = require("../core/tag.js");
const convert = (attr) => {
    if (attr.label) {
        attr.attrLabel = attr.label;
        delete attr.label;
    }
    return attr;
};
class track extends tag_js_1.tag {
    constructor(...arg) {
        super("track", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.track = track;
const Track = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(track, AttrOrElem, Elem);
exports.Track = Track;
