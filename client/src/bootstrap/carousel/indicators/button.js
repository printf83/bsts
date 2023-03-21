import { bsConstArg } from "../../../core/base/bootstrap.js";
import { button as TButton } from "../../../html/button.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
const convert = (attr) => {
    var _a;
    attr = mergeObject({
        class: [attr.active ? "active" : undefined],
        aria: {
            current: attr.active ? "true" : undefined,
        },
        data: {
            "bs-target": attr.target,
            "bs-slide-to": (_a = attr.slide) === null || _a === void 0 ? void 0 : _a.toString(),
        },
    }, attr);
    delete attr.active;
    delete attr.slide;
    delete attr.target;
    return attr;
};
export class button extends TButton {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
