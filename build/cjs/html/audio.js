"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audio = exports.audio = void 0;
const tag_js_1 = require("../core/tag.js");
class audio extends tag_js_1.tag {
    constructor(...arg) {
        super("audio", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.audio = audio;
const Audio = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(audio, AttrOrElem, Elem);
exports.Audio = Audio;
