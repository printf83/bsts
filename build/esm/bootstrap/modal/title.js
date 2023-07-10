import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { h } from "../../html/h.js";
import { mergeObject } from "../../core/mergeObject.js";
const convert = (attr) => {
    attr = mergeObject({
        id: attr.id || UUID(),
        h: 5,
        class: "modal-title",
    }, attr);
    return attr;
};
export class title extends h {
    constructor(...arg) {
        super(1, convert(bsConstArg("elem", arg)));
    }
}
export const Title = (AttrOrElem, Elem) => genTagClass(title, AttrOrElem, Elem);
