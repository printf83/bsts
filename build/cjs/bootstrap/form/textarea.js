"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
const mergeObject_js_1 = require("../../core/mergeObject.js");
const tag_js_1 = require("../../core/tag.js");
const uuid_js_1 = require("../../core/uuid.js");
const div_js_1 = require("../../html/div.js");
const textarea_js_1 = require("../textarea.js");
const container_js_1 = require("../inputgroup/container.js");
const _fn_js_1 = require("./_fn.js");
const Textarea = (attr) => {
    let container = attr.container;
    attr.id ??= (0, uuid_js_1.UUID)();
    attr.describedby = (0, _fn_js_1.descriptionSetup)(attr.id, attr.describedby, attr.description, attr.validFeedback, attr.invalidFeedback, attr.validTooltip, attr.invalidTooltip);
    //setup element
    let tLabel = (0, _fn_js_1.genLabel)(attr.id, attr.label, attr.hideLabel);
    let tDescription = (0, _fn_js_1.genDescription)(attr.id, attr.description);
    let tValidFeedback = (0, _fn_js_1.genValidFeedback)(attr.id, attr.validFeedback);
    let tInvalidFeedback = (0, _fn_js_1.genInvalidFeedback)(attr.id, attr.invalidFeedback);
    let tValidTooltip = (0, _fn_js_1.genValidTooltip)(attr.id, attr.validTooltip);
    let tInvalidTooltip = (0, _fn_js_1.genInvalidTooltip)(attr.id, attr.invalidTooltip);
    let tElemGroupBefore = (0, _fn_js_1.genGroupItem)(attr.id, attr.before);
    let tElemGroupAfter = (0, _fn_js_1.genGroupItem)(attr.id, attr.after);
    let colSetting = (0, _fn_js_1.colSetup)(attr.validFeedback, attr.invalidFeedback, attr.description, attr.col1, attr.col2, attr.col3);
    attr.col1 = colSetting.col1;
    attr.col2 = colSetting.col2;
    attr.col3 = colSetting.col3;
    //setup main control
    let tAttr = Object.assign({}, attr);
    if (!tAttr.hideLabel) {
        delete tAttr.label;
    }
    delete tAttr.hideLabel;
    delete tAttr.description;
    delete tAttr.container;
    delete tAttr.before;
    delete tAttr.after;
    delete tAttr.col1;
    delete tAttr.col2;
    delete tAttr.col3;
    delete tAttr.validFeedback;
    delete tAttr.invalidFeedback;
    delete tAttr.validTooltip;
    delete tAttr.invalidTooltip;
    let tElem = new textarea_js_1.textarea(tAttr);
    //setup container if col provided
    if (attr.col1) {
        if (!container) {
            container = {};
        }
        container = (0, mergeObject_js_1.mergeObject)({
            row: true,
        }, container);
        if ((0, tag_js_1.isTag)(tLabel)) {
            tLabel.attr = (0, mergeObject_js_1.mergeObject)({
                col: attr.col1,
                class: ["col-form-label", attr.weight ? `col-form-label-${attr.weight}` : undefined],
            }, tLabel.attr);
        }
        if (attr.col3 !== false) {
            tElem = new div_js_1.div({ col: attr.col2 }, tElem);
            tDescription = new div_js_1.div({ col: attr.col3 }, tDescription);
        }
        else {
            tElem = new div_js_1.div({ col: attr.col2 }, [tElem, tDescription]);
            tDescription = "";
        }
    }
    else {
        if ((0, tag_js_1.isTag)(tLabel)) {
            tLabel.attr = (0, mergeObject_js_1.mergeObject)({ class: "form-label" }, tLabel.attr);
        }
    }
    //put into tElem
    if (tElemGroupBefore.length > 0 || tElemGroupAfter.length > 0) {
        tElem = new container_js_1.container({
            weight: attr.weight,
            class: attr.invalidFeedback || attr.validFeedback || attr.invalidTooltip || attr.validTooltip
                ? "has-validation"
                : undefined,
            noWarp: !attr.invalidFeedback && !attr.validFeedback && !attr.invalidTooltip && !attr.validTooltip
                ? true
                : undefined,
            position: tInvalidTooltip || tValidTooltip ? "relative" : undefined,
        }, [
            ...tElemGroupBefore,
            tElem,
            ...tElemGroupAfter,
            tValidFeedback,
            tInvalidFeedback,
            tValidTooltip,
            tInvalidTooltip,
        ]);
        tValidFeedback = "";
        tInvalidFeedback = "";
        tValidTooltip = "";
        tInvalidTooltip = "";
    }
    if (tValidTooltip || tInvalidTooltip) {
        if (!container) {
            container = {};
        }
        container = (0, mergeObject_js_1.mergeObject)({ position: "relative" }, container);
    }
    return new div_js_1.div(container || {}, [
        tLabel,
        tElem,
        tDescription,
        tValidFeedback,
        tInvalidFeedback,
        tValidTooltip,
        tInvalidTooltip,
    ]);
};
exports.Textarea = Textarea;
