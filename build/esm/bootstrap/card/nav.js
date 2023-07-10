import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { container as BSNavHeaderContainer } from "../nav/header/container.js";
const convert = (attr) => {
    attr.type ??= "tab";
    attr.class = mergeClass(attr.class, `card-header-${attr.type}s`);
    return attr;
};
export class nav extends BSNavHeaderContainer {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Nav = (AttrOrElem, Elem) => genTagClass(nav, AttrOrElem, Elem);
