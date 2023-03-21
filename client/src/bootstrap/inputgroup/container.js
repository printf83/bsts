import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["input-group", attr.weight ? `input-group-${attr.weight}` : undefined]);
    if (attr.noWarp) {
        attr = mergeObject({ flex: "nowrap" }, attr);
    }
    delete attr.weight;
    delete attr.noWarp;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
