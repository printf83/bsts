import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { table } from "../../html/table.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        "table",
        attr.color ? `table-${attr.color}` : undefined,
        attr.striped ? (attr.striped === "row" ? "table-striped" : "table-striped-columns") : undefined,
        attr.hoverable ? "table-hover" : undefined,
        attr.bordered !== undefined ? (attr.bordered === true ? "table-bordered" : "table-borderless") : undefined,
        attr.small ? "table-sm" : undefined,
        attr.responsive
            ? attr.responsive === true
                ? "table-responsive"
                : `table-responsive-${attr.responsive}`
            : undefined,
        attr.captionLocation === "top" ? "caption-top" : undefined,
    ]);
    delete attr.color;
    delete attr.striped;
    delete attr.hoverable;
    delete attr.bordered;
    delete attr.small;
    delete attr.responsive;
    delete attr.captionLocation;
    return attr;
};
export class container extends table {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
