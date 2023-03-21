import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { div } from "../../../html/div.js";
const convert = (attr) => {
    attr.role = attr.role || "tabpanel";
    attr.tabindex = attr.tabindex || "0";
    attr.animation = attr.animation || true;
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
        super(bsConstArg("elem", convert, arg));
    }
}
