"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObject = void 0;
const mergeAttr_js_1 = require("./mergeAttr.js");
const mergeClass_js_1 = require("./mergeClass.js");
const mergeObject = (target, source) => {
    if (target) {
        if (source) {
            let a_class = target.class;
            let b_class = source.class;
            let a_style = target.style;
            let b_style = source.style;
            let a_aria = target.aria;
            let b_aria = source.aria;
            let a_data = target.data;
            let b_data = source.data;
            let a_on = target.on;
            let b_on = source.on;
            let result = (0, mergeAttr_js_1.mergeAttr)(target, source);
            result.class = (0, mergeClass_js_1.mergeClass)(a_class, b_class);
            result.style = (0, mergeAttr_js_1.mergeAttr)(a_style, b_style);
            result.aria = (0, mergeAttr_js_1.mergeAttr)(a_aria, b_aria);
            result.data = (0, mergeAttr_js_1.mergeAttr)(a_data, b_data);
            result.on = (0, mergeAttr_js_1.mergeAttr)(a_on, b_on);
            return result;
        }
        else {
            return target;
        }
    }
    else {
        if (source) {
            return source;
        }
        else {
            throw new Error("Please provide target or source");
        }
    }
};
exports.mergeObject = mergeObject;
