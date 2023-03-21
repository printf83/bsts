import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [
            "progress-bar",
            attr.striped ? "progress-bar-striped" : undefined,
            attr.striped && attr.animated ? "progress-bar-animated" : undefined,
        ],
        bgColor: attr.color,
    }, attr);
    delete attr.color;
    delete attr.striped;
    delete attr.animated;
    return attr;
};
export class bar extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
