import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { a } from "../../html/a.js";
const convert = (attr) => {
    attr = mergeObject({
        class: ["dropdown-item", attr.active ? "active" : undefined, attr.disabled ? "disabled" : undefined],
        href: attr.href || "#",
        aria: { current: attr.active ? "true" : undefined },
    }, attr);
    delete attr.active;
    delete attr.disabled;
    return attr;
};
export class item extends a {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
