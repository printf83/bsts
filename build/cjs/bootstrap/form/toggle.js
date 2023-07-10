"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
const mergeObject_js_1 = require("../../core/mergeObject.js");
const uuid_js_1 = require("../../core/uuid.js");
const input_js_1 = require("../input.js");
const label_js_1 = require("../label.js");
const Toggle = (attr) => {
    attr.id ??= (0, uuid_js_1.UUID)();
    attr.label ??= attr.id;
    let tLabel = new label_js_1.label((0, mergeObject_js_1.mergeObject)({
        for: attr.id,
    }, attr.container), attr.label);
    attr.toggle = true;
    delete attr.container;
    let tElem = new input_js_1.input(attr);
    return [tElem, tLabel];
};
exports.Toggle = Toggle;
