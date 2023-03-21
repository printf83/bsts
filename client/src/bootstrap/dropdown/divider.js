import { mergeClass } from "../../core/fn/mergeClass.js";
import { hr } from "../../html/hr.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "dropdown-divider");
    return attr;
};
export class divider extends hr {
    constructor(...arg) {
        if (arg.length === 0) {
            //#1
            super(convert({}));
        }
        else if (arg.length === 1) {
            super(convert(arg[0]));
        }
    }
}
