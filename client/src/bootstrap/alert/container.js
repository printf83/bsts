import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../html/div.js";
import { btnclose } from "../btnclose.js";
const convert = (attr) => {
    //add default value
    attr.role = attr.role || "alert";
    attr.color = attr.color || "primary";
    //add alert class
    attr = mergeObject({
        class: [
            "alert",
            attr.color ? `alert-${attr.color}` : undefined,
            attr.dismissible ? "alert-dismissible" : undefined,
            attr.dismissible ? "fade" : undefined,
            attr.dismissible ? "show" : undefined,
        ],
        role: attr.role,
        border: attr.callout ? [false, "start"] : attr.border,
        borderWidth: attr.callout ? 4 : attr.borderWidth,
        borderColor: attr.callout ? attr.color : attr.borderColor,
        rounded: attr.callout ? false : attr.rounded,
    }, attr);
    if (attr.dismissible) {
        attr.elem = attr.elem || [];
        if (!Array.isArray(attr.elem))
            attr.elem = [attr.elem];
        attr.elem.push(new btnclose({ data: { "bs-dismiss": "alert" } }));
    }
    delete attr.callout;
    delete attr.color;
    delete attr.dismissible;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
