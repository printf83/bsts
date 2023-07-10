import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { genTagClass } from "../core/tag.js";
import { img as TImg } from "../html/img.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [attr.fluid ? "img-fluid" : undefined, attr.thumbnail ? "img-thumbnail" : undefined],
    }, attr);
    delete attr.fluid;
    delete attr.thumbnail;
    return attr;
};
export class img extends TImg {
    constructor(...arg) {
        super(convert(bsConstArg("src", arg)));
    }
}
export const Img = (AttrOrSrc, Src) => genTagClass(img, AttrOrSrc, Src);
