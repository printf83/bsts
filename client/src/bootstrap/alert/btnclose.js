import { bsConsNoElemArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { btnclose as TBtnclose } from "../btnclose.js";
const convert = (attr) => {
    attr.dismiss = attr.dismiss || "alert";
    attr = mergeObject({
        data: { "bs-dismiss": attr.dismiss },
    }, attr);
    delete attr.dismiss;
    return attr;
};
export class btnclose extends TBtnclose {
    constructor(...arg) {
        super(bsConsNoElemArg(convert, arg));
    }
}
