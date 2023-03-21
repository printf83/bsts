import { bsConsNoElemArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { btnclose as TBtnclose } from "../btnclose.js";
const convert = (attr) => {
    attr.dismiss = attr.dismiss || "offcanvas";
    attr = mergeObject({
        data: { "bs-dismiss": attr.dismiss, "bs-target": attr.target },
    }, attr);
    delete attr.dismiss;
    delete attr.target;
    return attr;
};
export class btnclose extends TBtnclose {
    constructor(...arg) {
        super(bsConsNoElemArg(convert, arg));
    }
}
