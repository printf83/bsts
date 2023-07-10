import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [
            "progress-bar",
            attr.striped ? "progress-bar-striped" : undefined,
            attr.striped && attr.animated ? "progress-bar-animated" : undefined,
        ],
        bgColor: attr.color,
    }, attr);
    delete attr.color;
    delete attr.striped;
    delete attr.animated;
    return attr;
};
export class bar extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Bar = (AttrOrElem, Elem) => genTagClass(bar, AttrOrElem, Elem);
