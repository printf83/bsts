"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = exports.select = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const uuid_js_1 = require("../core/uuid.js");
const select_js_1 = require("../html/select.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        id: attr.id || (0, uuid_js_1.UUID)(),
        class: [
            "form-select",
            attr.weight ? `form-select-${attr.weight}` : undefined,
            attr.isvalid !== undefined ? (attr.isvalid ? "is-valid" : "is-invalid") : undefined,
        ],
    }, attr);
    delete attr.weight;
    delete attr.isvalid;
    return attr;
};
class select extends select_js_1.select {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.select = select;
const Select = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(select, AttrOrElem, Elem);
exports.Select = Select;
