import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { nav } from "../../html/nav.js";
import { ol } from "../../html/ol.js";
import { item } from "./item.js";
import { mergeClass } from "../../core/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "breadcrumb");
    if (!attr.elem) {
        if (attr.item) {
            let tItem = Array.isArray(attr.item) ? attr.item : [attr.item];
            attr.elem = tItem.map((i, ix) => {
                if (ix === tItem.length - 1) {
                    i.active ??= true;
                }
                return new item(i);
            });
        }
    }
    let label = attr.label;
    let divider = attr.divider;
    delete attr.label;
    delete attr.divider;
    delete attr.item;
    return {
        label: label,
        elem: new ol(attr),
        style: {
            "--bs-breadcrumb-divider": divider ? divider : undefined,
        },
    };
};
export class container extends nav {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);
