import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { blockquote } from "../../html/blockquote.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "blockquote");
    return attr;
};
export class container extends blockquote {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);
