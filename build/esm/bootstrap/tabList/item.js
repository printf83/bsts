import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a } from "../../html/a.js";
const convert = (attr) => {
    if (attr.disabled && attr.href) {
        delete attr.href;
    }
    attr = mergeObject({
        class: [
            "list-group-item",
            attr.action ? "list-group-item-action" : undefined,
            attr.color ? `list-group-item-${attr.color}` : undefined,
            attr.active ? "active" : undefined,
        ],
        data: {
            "bs-toggle": attr.autoInit ? "list" : undefined,
        },
    }, attr);
    if (attr.autoInit) {
        attr.role ??= "tab";
    }
    delete attr.active;
    delete attr.action;
    delete attr.color;
    delete attr.autoInit;
    return attr;
};
export class item extends a {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Item = (AttrOrElem, Elem) => genTagClass(item, AttrOrElem, Elem);
