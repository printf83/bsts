"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = exports.video = void 0;
const tag_js_1 = require("../core/tag.js");
class video extends tag_js_1.tag {
    constructor(...arg) {
        super("video", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.video = video;
const Video = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(video, AttrOrElem, Elem);
exports.Video = Video;
