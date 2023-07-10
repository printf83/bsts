import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button as Tbutton } from "../button.js";
const convert = (attr) => {
    attr = mergeObject({
        data: {
            "bs-toggle": "offcanvas",
            "bs-target": attr.link ? undefined : attr.target,
        },
        aria: { expanded: "false" },
        role: attr.link ? "button" : undefined,
        href: attr.link ? attr.target : undefined,
    }, attr);
    delete attr.link;
    delete attr.target;
    return attr;
};
export class button extends Tbutton {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Toggle = (AttrOrElem, Elem) => genTagClass(button, AttrOrElem, Elem);
