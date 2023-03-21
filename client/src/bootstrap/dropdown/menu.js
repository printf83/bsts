import { mergeClass } from "../../core/fn/mergeClass.js";
import { bootstrapAttachRule, bootstrapBase } from "../../core/base/bootstrap.js";
import { genBootstrapClass } from "../../core/attach/attachBootstrap.js";
import { div } from "../../html/div.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
const rules = {
    dropdownMenuPositionView: new bootstrapAttachRule({
        format: "dropdown-menu-$1",
        value: bootstrapBase.positionView.concat(),
    }),
};
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["dropdown-menu"]);
    if (attr.positionView) {
        attr.class = mergeClass(attr.class, genBootstrapClass("dropdownMenuPositionView", rules.dropdownMenuPositionView, attr.positionView));
    }
    delete attr.positionView;
    return attr;
};
export class menu extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
