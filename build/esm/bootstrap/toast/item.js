import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.animation ??= true;
    attr = mergeObject({
        class: ["toast", attr.debug ? "debug" : undefined],
        role: attr.role,
        textBgColor: attr.color,
        border: attr.color ? false : undefined,
        aria: {
            live: attr.live,
            atomic: attr.atomic ? "true" : undefined,
        },
        data: {
            "bs-animation": attr.animation
                ? attr.animation === true
                    ? "true"
                    : undefined
                : attr.animation === false
                    ? "false"
                    : undefined,
            "bs-autohide": attr.autohide === false ? "false" : undefined,
            "bs-delay": attr.delay ? attr.delay.toString() : undefined,
        },
    }, attr);
    delete attr.color;
    delete attr.live;
    delete attr.atomic;
    delete attr.autohide;
    delete attr.delay;
    delete attr.animation;
    delete attr.debug;
    return attr;
};
export class item extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Item = (AttrOrElem, Elem) => genTagClass(item, AttrOrElem, Elem);
