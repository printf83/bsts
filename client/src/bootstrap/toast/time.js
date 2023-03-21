import { bsConstArg } from "../../core/base/bootstrap.js";
import { small } from "../../html/small.js";
const convert = (attr) => {
    if (!attr.elem) {
        //TODO: create timer and show
    }
    return attr;
};
export class time extends small {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
