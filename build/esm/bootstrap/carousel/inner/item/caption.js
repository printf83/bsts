import { genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeClass } from "../../../../core/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["carousel-caption"]);
    attr.display ??= ["none", "md-block"];
    return attr;
};
export class caption extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Caption = (AttrOrElem, Elem) => genTagClass(caption, AttrOrElem, Elem);
