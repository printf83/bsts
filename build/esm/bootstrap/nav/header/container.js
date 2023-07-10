import { genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { ul } from "../../../html/ul.js";
import { item } from "./item.js";
import { link } from "./link.js";
import { button } from "./button.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [
            "nav",
            attr.type ? `nav-${attr.type}${attr.type !== "underline" ? "s" : ""}` : undefined,
            attr.itemWidth ? `nav-${attr.itemWidth}` : undefined,
            attr.vertical ? "flex-column" : undefined,
        ],
        aria: {
            orientation: attr.vertical ? "vertical" : undefined,
        },
    }, attr);
    if (attr.item && !attr.link && !attr.button && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new item(i);
        });
    }
    else if (!attr.item && attr.link && !attr.button && !attr.elem) {
        if (!Array.isArray(attr.link)) {
            attr.link = [attr.link];
        }
        attr.elem = attr.link.map((i) => {
            return new item(new link(i));
        });
    }
    else if (!attr.item && !attr.link && attr.button && !attr.elem) {
        if (!Array.isArray(attr.button)) {
            attr.button = [attr.button];
        }
        attr.elem = attr.button.map((i) => {
            return new item(new button(i));
        });
    }
    delete attr.item;
    delete attr.link;
    delete attr.button;
    delete attr.type;
    delete attr.itemWidth;
    delete attr.vertical;
    return attr;
};
export class container extends ul {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);
