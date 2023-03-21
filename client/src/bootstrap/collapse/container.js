import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.id = attr.id || UUID();
    attr.class = mergeClass(attr.class, ["collapse", attr.horizontal ? "collapse-horizontal" : undefined]);
    delete attr.horizontal;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
