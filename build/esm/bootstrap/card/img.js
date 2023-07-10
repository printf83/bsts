import { genTagClass } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { img as TImg } from "../../bootstrap/img.js";
import { bsConstArg } from "../../core/bootstrap.js";
const convert = (attr) => {
    if (attr.location) {
        attr.class = mergeClass(attr.class, [`card-img-${attr.location}`]);
    }
    delete attr.location;
    return attr;
};
export class img extends TImg {
    constructor(...arg) {
        super(convert(bsConstArg("src", arg)));
    }
}
export const Img = (AttrOrSrc, Src) => genTagClass(img, AttrOrSrc, Src);
