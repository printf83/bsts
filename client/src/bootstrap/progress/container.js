import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr = mergeObject({
        class: "progress",
        role: attr.role || "progressbar",
        aria: {
            valuenow: attr.value,
            valuemin: attr.min,
            valuemax: attr.max,
        },
    }, attr);
    delete attr.value;
    delete attr.min;
    delete attr.max;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
