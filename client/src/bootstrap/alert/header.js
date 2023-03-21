import { isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { h } from "../../html/h.js";
const convert = (attr) => {
    //add alert-header
    attr.class = mergeClass(attr.class, "alert-header");
    return attr;
};
export class header extends h {
    constructor(...arg) {
        if (arg.length === 0) {
            //#1
            super(4, convert({}), "Header");
        }
        else if (arg.length === 1) {
            //#2
            super(arg[0], convert({}));
        }
        else if (arg.length === 2) {
            if (isAttr(arg[1])) {
                //#2
                super(arg[0], convert(arg[1]));
            }
            else {
                //#3
                super(arg[0], convert({ elem: arg[1] }));
            }
        }
        else if (arg.length === 3) {
            //#4
            super(arg[0], convert(mergeObject({ elem: arg[1] }, arg[0])));
        }
    }
}
