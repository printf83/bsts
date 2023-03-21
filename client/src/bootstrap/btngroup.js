import { bsConstArg } from "../core/base/bootstrap.js";
import { div } from "../html/div.js";
import { mergeObject } from "../core/fn/mergeObject.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [
            attr.vertical ? "btn-group-vertical" : "btn-group",
            attr.weight ? `btn-group-${attr.weight}` : undefined,
        ],
        role: attr.role,
    }, attr);
    delete attr.role;
    delete attr.weight;
    delete attr.vertical;
    return attr;
};
export class btngroup extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
