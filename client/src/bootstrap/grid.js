import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../html/div.js";
const convert = (attr) => {
    attr = mergeObject({
        display: "grid",
        gap: 3,
    }, attr);
    return attr;
};
export class grid extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
