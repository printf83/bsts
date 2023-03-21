import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
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
        super(bsConstArg("src", convert, arg));
    }
}
