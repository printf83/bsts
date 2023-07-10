"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const uuid_js_1 = require("../../../core/uuid.js");
const div_js_1 = require("../../../html/div.js");
const input_js_1 = require("../../input.js");
const container_js_1 = require("../../inputgroup/container.js");
const label_js_1 = require("../../label.js");
const formfloating_js_1 = require("../../formfloating.js");
const _fn_js_1 = require("../_fn.js");
const mergeObject_js_1 = require("../../../core/mergeObject.js");
const Input = (attr) => {
    let container = attr.container;
    attr.type ??= "text";
    attr.id ??= (0, uuid_js_1.UUID)();
    attr.describedby = (0, _fn_js_1.descriptionSetup)(attr.id, attr.describedby, attr.description, attr.validFeedback, attr.invalidFeedback, attr.validTooltip, attr.invalidTooltip);
    attr.placeholder ??= attr.label;
    if (attr.datalist) {
        attr.list = `${attr.id}-datalist`;
    }
    //setup label
    let tLabel = attr.label
        ? new label_js_1.label({
            for: attr.id,
            class: "form-label",
        }, attr.label)
        : "";
    //setup element
    let tDatalist = (0, _fn_js_1.genDatalist)(attr.id, attr.datalist);
    let tDescription = (0, _fn_js_1.genDescription)(attr.id, attr.description);
    let tValidFeedback = (0, _fn_js_1.genValidFeedback)(attr.id, attr.validFeedback);
    let tInvalidFeedback = (0, _fn_js_1.genInvalidFeedback)(attr.id, attr.invalidFeedback);
    let tValidTooltip = (0, _fn_js_1.genValidTooltip)(attr.id, attr.validTooltip);
    let tInvalidTooltip = (0, _fn_js_1.genInvalidTooltip)(attr.id, attr.invalidTooltip);
    let tElemGroupBefore = (0, _fn_js_1.genGroupItem)(attr.id, attr.before);
    let tElemGroupAfter = (0, _fn_js_1.genGroupItem)(attr.id, attr.after);
    //setup main control
    let tAttr = Object.assign({}, attr);
    delete tAttr.datalist;
    delete tAttr.label;
    delete tAttr.description;
    delete tAttr.container;
    delete tAttr.before;
    delete tAttr.after;
    delete tAttr.validFeedback;
    delete tAttr.invalidFeedback;
    delete tAttr.validTooltip;
    delete tAttr.invalidTooltip;
    tAttr = tAttr;
    if (attr.validFeedback || attr.invalidFeedback || attr.validTooltip || attr.invalidTooltip) {
        tAttr = (0, mergeObject_js_1.mergeObject)({ on: { input: _fn_js_1.labelFloatingFeedbackManager, invalid: _fn_js_1.labelFloatingFeedbackManager } }, tAttr);
    }
    let tElem = new input_js_1.input(tAttr);
    //put into tElem
    if (tElemGroupBefore || tElemGroupAfter) {
        return new div_js_1.div(container || {}, [
            new container_js_1.container({
                weight: attr.weight,
                class: attr.invalidFeedback || attr.validFeedback || attr.invalidTooltip || attr.validTooltip
                    ? "has-validation"
                    : undefined,
                noWarp: !attr.invalidFeedback && !attr.validFeedback && !attr.invalidTooltip && !attr.validTooltip
                    ? true
                    : undefined,
            }, [
                ...tElemGroupBefore,
                new formfloating_js_1.formfloating({
                    class: [
                        attr.isvalid === true ? "is-valid" : undefined,
                        attr.isvalid === false ? "is-invalid" : undefined,
                    ],
                }, [tElem, tDatalist, tLabel]),
                ...tElemGroupAfter,
                tValidFeedback,
                tInvalidFeedback,
                tValidTooltip,
                tInvalidTooltip,
            ]),
            tDescription,
        ]);
    }
    else {
        return new div_js_1.div(container || {}, [tElem, tDatalist, tDescription, tLabel]);
    }
};
exports.Input = Input;
