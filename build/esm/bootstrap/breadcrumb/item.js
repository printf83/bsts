import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { a } from "../../html/a.js";
import { li } from "../../html/li.js";
const convert = (attr) => {
    let active = attr.active;
    if (active) {
        delete attr.href;
    }
    delete attr.color;
    delete attr.active;
    return {
        class: ["breadcrumb-item", active ? "active" : undefined],
        aria: { current: active ? "page" : undefined },
        elem: new a(attr),
    };
};
export class item extends li {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Item = (AttrOrElem, Elem) => genTagClass(item, AttrOrElem, Elem);
