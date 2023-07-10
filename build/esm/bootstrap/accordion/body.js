import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { container } from "../collapse/container.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/mergeObject.js";
const convert = (attr) => {
    attr = mergeObject({
        id: attr.id || UUID(),
        class: ["accordion-collapse", attr.show ? "show" : undefined],
        data: { "bs-parent": attr.parent },
        aria: { labelledby: attr.labelledby },
    }, attr);
    attr.elem = new div({ class: "accordion-body" }, attr.elem ? attr.elem : "");
    delete attr.labelledby;
    delete attr.parent;
    delete attr.show;
    return attr;
};
export class body extends container {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Body = (AttrOrElem, Elem) => genTagClass(body, AttrOrElem, Elem);
