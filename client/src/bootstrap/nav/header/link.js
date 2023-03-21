import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { a } from "../../../html/a.js";
const convert = (attr) => {
    if (attr.dropdown) {
        attr.role = "button";
    }
    attr = mergeObject({
        class: [
            "nav-link",
            attr.active ? "active" : undefined,
            attr.disabled ? "disabled" : undefined,
            attr.dropdown ? "dropdown-toggle" : undefined,
        ],
        href: attr.href || "#",
        aria: {
            current: attr.active ? "page" : undefined,
            expanded: attr.dropdown ? "false" : undefined,
        },
        data: { "bs-toggle": attr.dropdown ? "dropdown" : undefined },
    }, attr);
    delete attr.active;
    delete attr.disabled;
    delete attr.dropdown;
    return attr;
};
export class link extends a {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
