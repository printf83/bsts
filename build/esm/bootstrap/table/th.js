import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { th as TTh } from "../../html/th.js";
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
export class th extends TTh {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Th = (AttrOrElem, Elem) => genTagClass(th, AttrOrElem, Elem);
