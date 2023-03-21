import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { a } from "../../html/a.js";
import { li } from "../../html/li.js";
const convert = (attr) => {
    attr = mergeObject({
        class: ["breadcrumb-item", attr.active ? "active" : undefined],
        aria: { current: attr.active ? "page" : undefined },
    }, attr);
    if (!attr.active && attr.href) {
        if (attr.elem) {
            attr.elem = new a({ href: attr.href }, attr.elem);
        }
        else {
            attr.elem = new a({ href: attr.href });
        }
    }
    delete attr.active;
    return attr;
};
export class item extends li {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
