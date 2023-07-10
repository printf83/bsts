import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr = mergeObject({ class: "progress-stacked" }, attr);
    return attr;
};
export class stacked extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Stacked = (AttrOrElem, Elem) => genTagClass(stacked, AttrOrElem, Elem);
