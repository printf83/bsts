"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check = void 0;
const uuid_js_1 = require("../../core/uuid.js");
const div_js_1 = require("../../html/div.js");
const input_js_1 = require("../input.js");
const label_js_1 = require("../label.js");
const _fn_js_1 = require("./_fn.js");
const Check = (attr) => {
    attr.type ??= "checkbox";
    attr.id ??= (0, uuid_js_1.UUID)();
    attr.label ??= attr.id;
    attr.describedby = (0, _fn_js_1.descriptionSetup)(attr.id, attr.describedby, attr.description, attr.validFeedback, attr.invalidFeedback, attr.validTooltip, attr.invalidTooltip);
    let tContainer = {
        class: [
            attr.hideLabel ? undefined : "form-check",
            attr.switch ? "form-switch" : undefined,
            attr.inline ? "form-check-inline" : undefined,
            attr.reverse ? "form-check-reverse" : undefined,
        ],
        position: attr.validTooltip || attr.invalidTooltip ? "relative" : undefined,
    };
    let tDescription = (0, _fn_js_1.genDescription)(attr.id, attr.description);
    let tValidFeedback = (0, _fn_js_1.genValidFeedback)(attr.id, attr.validFeedback);
    let tInvalidFeedback = (0, _fn_js_1.genInvalidFeedback)(attr.id, attr.invalidFeedback);
    let tValidTooltip = (0, _fn_js_1.genValidTooltip)(attr.id, attr.validTooltip);
    let tInvalidTooltip = (0, _fn_js_1.genInvalidTooltip)(attr.id, attr.invalidTooltip);
    //setup label
    let tLabel = null;
    if (!attr.hideLabel) {
        tLabel = new label_js_1.label({
            for: attr.id,
            visually: attr.hideLabel ? "hidden" : undefined,
            class: "form-check-label",
        }, attr.label);
        delete attr.label;
    }
    //setup main control
    let tAttr = Object.assign({}, attr);
    if (!tAttr.hideLabel) {
        delete tAttr.label;
    }
    delete tAttr.hideLabel;
    delete tAttr.container;
    delete tAttr.inline;
    delete tAttr.reverse;
    delete tAttr.description;
    delete tAttr.invalidFeedback;
    delete tAttr.validFeedback;
    delete tAttr.validTooltip;
    delete tAttr.invalidTooltip;
    let tElem = new input_js_1.input(tAttr);
    //put in container
    if (attr.container) {
        return new div_js_1.div(attr.container, new div_js_1.div(tContainer, [
            tElem,
            tLabel ? tLabel : "",
            tDescription,
            tValidFeedback,
            tInvalidFeedback,
            tValidTooltip,
            tInvalidTooltip,
        ]));
    }
    else {
        return new div_js_1.div(tContainer, [
            tElem,
            tLabel ? tLabel : "",
            tDescription,
            tValidFeedback,
            tInvalidFeedback,
            tValidTooltip,
            tInvalidTooltip,
        ]);
    }
};
exports.Check = Check;
