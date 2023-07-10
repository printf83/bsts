"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.input = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const tag_js_1 = require("../core/tag.js");
const uuid_js_1 = require("../core/uuid.js");
const input_js_1 = require("../html/input.js");
const convert = (attr) => {
    //set default value
    attr.type ??= "text";
    //set to checkbox if swithc
    if (attr.switch) {
        attr.type = "checkbox";
        attr.role = "switch";
    }
    //readonly if plaintext
    if (attr.plaintext) {
        attr.readonly = true;
    }
    //autocomplete off if toggle
    if (attr.toggle)
        attr.autocomplete = "off";
    attr = (0, mergeObject_js_1.mergeObject)({
        id: attr.id || (0, uuid_js_1.UUID)(),
        type: attr.type,
        class: [
            ["range", "radio", "checkbox"].indexOf(attr.type) === -1 && !attr.plaintext
                ? "form-control"
                : undefined,
            ["radio", "checkbox"].indexOf(attr.type) > -1
                ? attr.toggle === true
                    ? "btn-check"
                    : "form-check-input"
                : undefined,
            attr.type === "color" ? "form-control-color" : undefined,
            attr.type === "range" ? "form-range" : undefined,
            attr.plaintext ? "form-control-plaintext" : undefined,
            attr.weight ? `form-control-${attr.weight}` : undefined,
            attr.isvalid !== undefined ? (attr.isvalid ? "is-valid" : "is-invalid") : undefined,
        ],
    }, attr);
    delete attr.weight;
    delete attr.toggle;
    delete attr.switch;
    delete attr.plaintext;
    delete attr.isvalid;
    return attr;
};
class input extends input_js_1.input {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("value", arg)));
    }
}
exports.input = input;
const Input = (AttrOrValue, Value) => (0, tag_js_1.genTagClass)(input, AttrOrValue, Value);
exports.Input = Input;
