import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { thead as TThead } from "../../html/thead.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);
    delete attr.color;
    return attr;
};
export class thead extends TThead {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Thead = (AttrOrElem, Elem) => genTagClass(thead, AttrOrElem, Elem);
