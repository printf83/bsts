import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr = mergeObject({
        class: ["toast", attr.debug ? "show" : undefined],
        role: attr.role,
        textBgColor: attr.color,
        border: attr.color ? false : undefined,
        aria: {
            live: attr.live,
            atomic: attr.atomic ? "true" : undefined,
        },
        data: {
            "bs-autohide": attr.autohide === false ? "false" : undefined,
            "bs-delay": attr.delay ? attr.delay.toString() : undefined,
        },
    }, attr);
    delete attr.color;
    delete attr.live;
    delete attr.atomic;
    delete attr.autohide;
    delete attr.delay;
    delete attr.debug;
    return attr;
};
export class item extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
