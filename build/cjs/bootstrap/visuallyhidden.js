"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visuallyhidden = exports.visuallyhidden = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const tag_js_1 = require("../core/tag.js");
const convert = (attr) => {
    if (attr.href) {
        attr.focusable ??= true;
    }
    attr.visually = attr.focusable ? "hidden-focusable" : "hidden";
    delete attr.focusable;
    return attr;
};
class visuallyhidden extends tag_js_1.tag {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConstArgTag)("elem", "span", "a", (i) => (i.href ? true : false), arg), convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.visuallyhidden = visuallyhidden;
const Visuallyhidden = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(visuallyhidden, AttrOrElem, Elem);
exports.Visuallyhidden = Visuallyhidden;
