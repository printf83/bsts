import { genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";
const convert = (attr) => {
    attr.animation ??= true;
    attr.role ??= "tabpanel";
    attr.class = mergeClass(attr.class, [
        "tab-pane",
        attr.animation ? "fade" : undefined,
        attr.active ? "show" : undefined,
        attr.active ? "active" : undefined,
    ]);
    delete attr.animation;
    delete attr.active;
    return attr;
};
export class pane extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Pane = (AttrOrElem, Elem) => genTagClass(pane, AttrOrElem, Elem);
