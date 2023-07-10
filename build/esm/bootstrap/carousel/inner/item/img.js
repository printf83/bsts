import { genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { img as TImg } from "../../../img.js";
const convert = (attr) => {
    attr.display = "block";
    attr.width = 100;
    return attr;
};
export class img extends TImg {
    constructor(...arg) {
        super(convert(bsConstArg("src", arg)));
    }
}
export const Img = (AttrOrSrc, Src) => genTagClass(img, AttrOrSrc, Src);
