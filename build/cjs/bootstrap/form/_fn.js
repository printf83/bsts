"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelFloatingFeedbackManager = exports.descriptionSetup = exports.colSetup = exports.genLabel = exports.genGroupItem = exports.genInvalidTooltip = exports.genValidTooltip = exports.genInvalidFeedback = exports.genValidFeedback = exports.genDescription = exports.genDatalist = void 0;
const datalist_js_1 = require("../../html/datalist.js");
const div_js_1 = require("../../html/div.js");
const input_js_1 = require("../input.js");
const label_js_1 = require("../label.js");
const text_js_1 = require("../inputgroup/text.js");
const genDatalist = (id, datalist) => {
    return datalist ? new datalist_js_1.datalist({ id: `${id}-datalist`, item: datalist }) : "";
};
exports.genDatalist = genDatalist;
const genDescription = (id, description) => {
    return description ? new div_js_1.div({ id: `${id}-description`, class: "form-text" }, description) : "";
};
exports.genDescription = genDescription;
const genValidFeedback = (id, feedback) => {
    return feedback ? new div_js_1.div({ id: `${id}-valid-feedback`, class: "valid-feedback" }, feedback) : "";
};
exports.genValidFeedback = genValidFeedback;
const genInvalidFeedback = (id, feedback) => {
    return feedback ? new div_js_1.div({ id: `${id}-invalid-feedback`, class: "invalid-feedback" }, feedback) : "";
};
exports.genInvalidFeedback = genInvalidFeedback;
const genValidTooltip = (id, feedback) => {
    return feedback ? new div_js_1.div({ id: `${id}-valid-tooltip`, class: "valid-tooltip" }, feedback) : "";
};
exports.genValidTooltip = genValidTooltip;
const genInvalidTooltip = (id, feedback) => {
    return feedback ? new div_js_1.div({ id: `${id}-invalid-tooltip`, class: "invalid-tooltip" }, feedback) : "";
};
exports.genInvalidTooltip = genInvalidTooltip;
const genGroupItem = (id, item) => {
    let result = [];
    if (item) {
        if (!Array.isArray(item)) {
            item = [item];
        }
        item.forEach((i, ix) => {
            if (typeof i === "string") {
                switch (i) {
                    case "[checkbox]":
                        result.push(new text_js_1.text(new input_js_1.input({
                            marginTop: 0,
                            type: "checkbox",
                            id: `${id}-checkbox-${ix}`,
                        })));
                        break;
                    case "[radio]":
                        result.push(new text_js_1.text(new input_js_1.input({
                            marginTop: 0,
                            type: "radio",
                            id: `${id}-radio-${ix}`,
                        })));
                        break;
                    default:
                        result.push(new text_js_1.text(i));
                }
            }
            else {
                result.push(i);
            }
        });
    }
    return result;
};
exports.genGroupItem = genGroupItem;
const genLabel = (id, label, hideLabel) => {
    if (label && !hideLabel) {
        return new label_js_1.label({
            for: id,
        }, label);
    }
    else {
        return "";
    }
};
exports.genLabel = genLabel;
const colSetup = (validfeedback, invalidfeedback, description, col1, col2, col3) => {
    //setup col if provided
    if (col1) {
        col2 ??= "auto";
        if ((description || validfeedback || invalidfeedback) && col3 !== false) {
            col3 ??= "auto";
        }
        else {
            col3 = false;
        }
    }
    if (col2) {
        col1 ??= "auto";
        if ((description || validfeedback || invalidfeedback) && col3 !== false) {
            col3 ??= "auto";
        }
        else {
            col3 = false;
        }
    }
    if (col3) {
        col1 ??= "auto";
        col2 ??= "auto";
    }
    return { col1, col2, col3 };
};
exports.colSetup = colSetup;
const descriptionSetup = (id, describedby, description, validFeedback, invalidFeedback, validTooltip, invalidTooltip) => {
    if (describedby) {
        switch (describedby) {
            case "[description]":
                if (description) {
                    return `${id}-description`;
                }
                break;
            case "[valid]":
                if (validFeedback) {
                    return `${id}-valid-feedback`;
                }
                else if (validTooltip) {
                    return `${id}-valid-tooltip`;
                }
                else if (description) {
                    return `${id}-description`;
                }
                break;
            case "[invalid]":
                if (invalidFeedback) {
                    return `${id}-invalid-feedback`;
                }
                else if (invalidTooltip) {
                    return `${id}-invalid-tooltip`;
                }
                else if (description) {
                    return `${id}-description`;
                }
                break;
            default:
                return describedby;
        }
    }
    else {
        if (description) {
            return `${id}-description`;
        }
    }
    return undefined;
};
exports.descriptionSetup = descriptionSetup;
const labelFloatingFeedbackManager = (e) => {
    const target = e.target;
    const validity = target.validity;
    const container = target.closest(".form-floating");
    if (container) {
        if (validity.valid) {
            target.classList.remove("is-invalid");
            target.classList.add("is-valid");
            container.classList.remove("is-invalid");
            container.classList.add("is-valid");
        }
        else {
            target.classList.remove("is-valid");
            target.classList.add("is-invalid");
            container.classList.remove("is-valid");
            container.classList.add("is-invalid");
        }
    }
};
exports.labelFloatingFeedbackManager = labelFloatingFeedbackManager;
