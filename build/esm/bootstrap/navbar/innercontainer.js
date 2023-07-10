import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { nav } from "../../html/nav.js";
const convert = (attr) => {
    return attr;
};
export class innercontainer extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Innercontainer = (AttrOrElem, Elem) => genTagClass(innercontainer, AttrOrElem, Elem);
export class innercontainerNav extends nav {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const InnercontainerNav = (AttrOrElem, Elem) => genTagClass(innercontainerNav, AttrOrElem, Elem);
