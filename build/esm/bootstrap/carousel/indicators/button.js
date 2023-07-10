import { genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { button as TButton } from "../../../html/button.js";
import { mergeObject } from "../../../core/mergeObject.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [attr.active ? "active" : undefined],
        aria: {
            current: attr.active ? "true" : undefined,
        },
        data: {
            "bs-target": attr.target,
            "bs-slide-to": attr.slide?.toString(),
        },
    }, attr);
    delete attr.active;
    delete attr.slide;
    delete attr.target;
    return attr;
};
export class button extends TButton {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Button = (AttrOrElem, Elem) => genTagClass(button, AttrOrElem, Elem);
