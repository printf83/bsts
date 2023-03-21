import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../html/div.js";
const convert = (attr) => {
    attr = mergeObject({
        data: {
            "bs-spy": "scroll",
            "bs-target": attr.target,
            "bs-smooth-scroll": attr.smooth ? "true" : undefined,
        },
        tabindex: attr.tabindex || "0",
    }, attr);
    delete attr.target;
    delete attr.smooth;
    return attr;
};
export class scrollspy extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
