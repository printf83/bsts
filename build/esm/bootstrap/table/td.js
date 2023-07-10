import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { td as TTd } from "../../html/td.js";
import { mergeObject } from "../../core/mergeObject.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        attr.color ? `table-${attr.color}` : undefined,
        attr.active ? "table-active" : undefined,
    ]);
    if (attr.responsiveAttr && attr.responsiveTitle) {
        attr = mergeObject({
            data: {
                [attr.responsiveAttr]: attr.responsiveTitle,
            },
        }, attr);
    }
    delete attr.color;
    delete attr.active;
    delete attr.responsiveAttr;
    delete attr.responsiveTitle;
    return attr;
};
export class td extends TTd {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Td = (AttrOrElem, Elem) => genTagClass(td, AttrOrElem, Elem);
