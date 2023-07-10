import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { nav } from "../../html/nav.js";
import { header } from "../../html/header.js";
import { mergeClass } from "../../core/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["navbar", attr.expand ? `navbar-expand-${attr.expand}` : undefined]);
    delete attr.expand;
    return attr;
};
export class container extends nav {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);
export class containerHeader extends header {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const ContainerHeader = (AttrOrElem, Elem) => genTagClass(containerHeader, AttrOrElem, Elem);
