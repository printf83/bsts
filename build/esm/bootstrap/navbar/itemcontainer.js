import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { ul } from "../../html/ul.js";
const convert = (attr) => {
    attr = mergeObject({
        class: ["navbar-nav", attr.scroll ? "navbar-nav-scroll" : undefined],
        style: { "--bs-scroll-height": attr.scrollHeight },
    }, attr);
    return attr;
};
export class itemcontainer extends ul {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Itemcontainer = (AttrOrElem, Elem) => genTagClass(itemcontainer, AttrOrElem, Elem);
