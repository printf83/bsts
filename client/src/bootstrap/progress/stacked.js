import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr = mergeObject({ class: "progress-stacked" }, attr);
    return attr;
};
export class stacked extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
