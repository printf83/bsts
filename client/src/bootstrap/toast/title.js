import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { strong } from "../../html/strong.js";
const convert = (attr) => {
    attr = mergeObject({ marginEnd: "auto" }, attr);
    return attr;
};
export class title extends strong {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
