import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "card-img-overlay");
    return attr;
};
export class imgoverlay extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Imgoverlay = (AttrOrElem, Elem) => genTagClass(imgoverlay, AttrOrElem, Elem);
