"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embed = exports.embed = void 0;
const tag_js_1 = require("../core/tag.js");
class embed extends tag_js_1.tag {
    constructor(...arg) {
        if (arg.length === 0) {
            super("embed");
        }
        else if (arg.length === 2) {
            super("embed", { type: arg[0], src: arg[1] });
        }
        else if (arg.length === 1) {
            super("embed", arg[0]);
        }
    }
}
exports.embed = embed;
const Embed = (AttrOrType, Src) => {
    if (AttrOrType) {
        if (Src) {
            return new embed(AttrOrType, Src);
        }
        else {
            return new embed(AttrOrType);
        }
    }
    else {
        return new embed();
    }
};
exports.Embed = Embed;
