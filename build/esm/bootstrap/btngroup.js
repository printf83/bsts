import { genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { mergeObject } from "../core/mergeObject.js";
const convert = (attr) => {
    attr.role ??= "group";
    attr = mergeObject({
        class: [
            attr.vertical ? `btn-${attr.role}-vertical` : `btn-${attr.role}`,
            attr.weight ? `btn-${attr.role}-${attr.weight}` : undefined,
        ],
        role: attr.role,
    }, attr);
    delete attr.weight;
    delete attr.vertical;
    return attr;
};
export class btngroup extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Btngroup = (AttrOrElem, Elem) => genTagClass(btngroup, AttrOrElem, Elem);
