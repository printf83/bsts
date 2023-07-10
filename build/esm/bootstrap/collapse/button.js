import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button as Tbutton } from "../button.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [attr.expanded ? undefined : "collapsed", attr.icon ? "btn-toggle" : undefined],
        data: {
            "bs-toggle": "collapse",
            "bs-target": attr.link ? undefined : attr.target,
        },
        aria: { expanded: attr.expanded ? "true" : "false" },
        role: attr.link ? "button" : undefined,
        href: attr.link ? attr.target : undefined,
    }, attr);
    delete attr.link;
    delete attr.target;
    delete attr.expanded;
    return attr;
};
export class button extends Tbutton {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Toggle = (AttrOrElem, Elem) => genTagClass(button, AttrOrElem, Elem);
