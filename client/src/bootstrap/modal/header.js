import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { div } from "../../html/div.js";
import { btnclose } from "./btnclose.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "modal-header");
    if (attr.close) {
        if (attr.elem) {
            if (Array.isArray(attr.elem)) {
                attr.elem.push(new btnclose());
            }
            else {
                attr.elem = [attr.elem, new btnclose()];
            }
        }
        else {
            attr.elem = [new btnclose()];
        }
    }
    delete attr.close;
    return attr;
};
export class header extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
