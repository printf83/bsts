import { bsConstArg } from "../../src/core/base/bootstrap.js";
import { div } from "../../src/html/div.js";
const convert = (attr) => {
    return attr;
};
export class item extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
