import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { img as TImg } from "../img.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "figure-img");
    return attr;
};
export class img extends TImg {
    constructor(...arg) {
        super(convert(bsConstArg("src", arg)));
    }
}
export const Img = (AttrOrSrc, Src) => genTagClass(img, AttrOrSrc, Src);
