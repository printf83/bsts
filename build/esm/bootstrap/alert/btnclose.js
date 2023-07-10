import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { genTagClass } from "../../core/tag.js";
import { btnclose as TBtnclose } from "../btnclose.js";
const convert = (attr) => {
    attr.dismiss ??= "alert";
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
export const Btnclose = (Attr) => genTagClass(btnclose, Attr);
