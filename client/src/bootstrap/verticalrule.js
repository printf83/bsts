import { bsConsNoElemArg } from "../core/base/bootstrap.js";
import { div } from "../html/div.js";
import { mergeClass } from "../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["vr"]);
    return attr;
};
export class verticalrule extends div {
    constructor(...arg) {
        super(bsConsNoElemArg(convert, arg));
    }
}
