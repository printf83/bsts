import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["input-group", attr.weight ? `input-group-${attr.weight}` : undefined]);
    if (attr.noWarp) {
        attr = mergeObject({ flex: "nowrap" }, attr);
    }
    delete attr.weight;
    delete attr.noWarp;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);
