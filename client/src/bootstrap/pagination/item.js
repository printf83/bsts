import { bsConstArg } from "../../core/base/bootstrap.js";
import { li } from "../../html/li.js";
import { span } from "../../html/span.js";
import { a } from "../../html/a.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
const convert = (attr) => {
    let liAttr = {
        class: ["page-item", attr.active ? "active" : undefined, attr.disabled ? "disabled" : undefined],
        aria: { current: attr.active ? "page" : undefined },
    };
    delete attr.active;
    delete attr.disabled;
    attr.class = mergeClass(attr.class, "page-link");
    if (attr.href) {
        liAttr.elem = new a(attr);
    }
    else {
        liAttr.elem = new span(attr);
    }
    return liAttr;
};
export class item extends li {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
