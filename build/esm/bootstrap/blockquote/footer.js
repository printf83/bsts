import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { footer as TFooter } from "../../html/footer.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "blockquote-footer");
    return attr;
};
export class footer extends TFooter {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Footer = (AttrOrElem, Elem) => genTagClass(footer, AttrOrElem, Elem);
