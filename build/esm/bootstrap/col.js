import { bsConstArg } from "../core/bootstrap.js";
import { genTagClass } from "../core/tag.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";
const convert = (attr) => {
    attr = mergeObject({
        col: true,
    }, attr);
    return attr;
};
export class col extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Col = (AttrOrElem, Elem) => genTagClass(col, AttrOrElem, Elem);
