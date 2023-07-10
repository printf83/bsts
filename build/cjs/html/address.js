"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.address = void 0;
const tag_js_1 = require("../core/tag.js");
class address extends tag_js_1.tag {
    constructor(...arg) {
        super("address", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.address = address;
const Address = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(address, AttrOrElem, Elem);
exports.Address = Address;
