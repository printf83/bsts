import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../html/div.js";
const convert = (attr) => {
    attr = mergeObject({
        container: true,
    }, attr);
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
