import { bsConstArg } from "../../../../core/base/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeObject } from "../../../../core/fn/mergeObject.js";
const convert = (attr) => {
    attr = mergeObject({
        class: ["carousel-item", attr.active ? "active" : undefined],
        data: { "bs-interval": attr.interval },
    }, attr);
    delete attr.active;
    delete attr.interval;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
