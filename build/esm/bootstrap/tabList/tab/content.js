import { genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "tab-content");
    return attr;
};
export class content extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Content = (AttrOrElem, Elem) => genTagClass(content, AttrOrElem, Elem);
