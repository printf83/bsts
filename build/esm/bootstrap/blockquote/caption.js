import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { figcaption } from "../../html/figcaption.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "blockquote-footer");
    return attr;
};
export class caption extends figcaption {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Caption = (AttrOrElem, Elem) => genTagClass(caption, AttrOrElem, Elem);
