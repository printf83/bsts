"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = exports.textarea = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const tag_js_1 = require("../core/tag.js");
const uuid_js_1 = require("../core/uuid.js");
const textarea_js_1 = require("../html/textarea.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        id: attr.id || (0, uuid_js_1.UUID)(),
        class: [
            attr.readonly !== true ? "form-control" : undefined,
            attr.readonly ? "form-control-plaintext" : undefined,
            attr.weight ? `form-control-${attr.weight}` : undefined,
            attr.isvalid !== undefined ? (attr.isvalid ? "is-valid" : "is-invalid") : undefined,
        ],
    }, attr);
    delete attr.weight;
    delete attr.isvalid;
    return attr;
};
class textarea extends textarea_js_1.textarea {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("value", arg)));
    }
}
exports.textarea = textarea;
const Textarea = (AttrOrValue, Value) => (0, tag_js_1.genTagClass)(textarea, AttrOrValue, Value);
exports.Textarea = Textarea;
