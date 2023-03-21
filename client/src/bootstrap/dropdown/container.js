import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { btngroup } from "../btngroup.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        attr.drop && attr.drop !== "down" ? `drop${attr.drop}` : undefined,
        attr.center && attr.drop !== "start" && attr.drop !== "end" ? `drop${attr.drop}-center` : undefined,
    ]);
    delete attr.drop;
    delete attr.center;
    return attr;
};
export class container extends btngroup {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
