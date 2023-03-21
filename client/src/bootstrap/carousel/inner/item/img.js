import { bsConstArg } from "../../../../core/base/bootstrap.js";
import { img as TImg } from "../../../img.js";
const convert = (attr) => {
    attr.display = "block";
    attr.width = 100;
    return attr;
};
export class img extends TImg {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
