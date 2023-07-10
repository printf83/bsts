import { genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";
const convert = (attr) => {
    attr.role ??= "tabpanel";
    attr.tabindex ??= "0";
    attr.animation ??= true;
    attr.class = mergeClass(attr.class, [
        "tab-pane",
        attr.active ? "active" : undefined,
        attr.active ? "show" : undefined,
        attr.animation ? "fade" : undefined,
    ]);
    delete attr.active;
    return attr;
};
export class item extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Item = (AttrOrElem, Elem) => genTagClass(item, AttrOrElem, Elem);
