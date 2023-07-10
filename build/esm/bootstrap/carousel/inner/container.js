import { genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";
import { mergeObject } from "../../../core/mergeObject.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "carousel-inner");
    attr = mergeObject({ class: "carousel-inner", rounded: true }, attr);
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);
