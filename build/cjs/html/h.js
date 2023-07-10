"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H = exports.h = void 0;
const tag_js_1 = require("../core/tag.js");
class h extends tag_js_1.tag {
    constructor(...arg) {
        if (arg) {
            if (arg.length > 1) {
                let l = arg.shift();
                super(`h${l}`, (0, tag_js_1.tagConsArg)("elem", arg));
            }
            else {
                super(`h${arg[0]}`);
            }
        }
        else {
            super("h1");
        }
    }
}
exports.h = h;
const H = (Level, AttrOrElem, Elem) => {
    if (AttrOrElem) {
        if ((0, tag_js_1.isAttr)(AttrOrElem)) {
            if (Elem) {
                return new h(Level, AttrOrElem, Elem);
            }
            else {
                return new h(Level, AttrOrElem);
            }
        }
        else {
            return new h(Level, AttrOrElem);
        }
    }
    else {
        return new h(Level);
    }
};
exports.H = H;
