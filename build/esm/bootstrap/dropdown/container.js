import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { btngroup } from "../btngroup.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [attr.drop ? `drop${attr.drop}` : undefined]);
    delete attr.drop;
    return attr;
};
export class container extends btngroup {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);
