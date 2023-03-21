import { bsConstArg } from "../../src/core/base/bootstrap.js";
import { p } from "../../src/html/p.js";
const convert = (attr) => {
    return attr;
};
export class text extends p {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
