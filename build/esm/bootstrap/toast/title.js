import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { strong } from "../../html/strong.js";
const convert = (attr) => {
    attr = mergeObject({ marginEnd: "auto" }, attr);
    return attr;
};
export class title extends strong {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Title = (AttrOrElem, Elem) => genTagClass(title, AttrOrElem, Elem);
