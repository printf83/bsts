import { genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeObject } from "../../../../core/mergeObject.js";
const convert = (attr) => {
    attr = mergeObject({
        class: ["carousel-item", attr.active ? "active" : undefined],
        data: { "bs-interval": attr.interval },
    }, attr);
    delete attr.active;
    delete attr.interval;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);
