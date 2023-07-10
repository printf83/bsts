import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { mergeClass } from "../../core/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        "list-group",
        attr.flush ? "list-group-flush" : undefined,
        attr.numbered ? "list-group-numbered" : undefined,
        attr.horizontal
            ? attr.horizontal === true
                ? "list-group-horizontal"
                : `list-group-horizontal-${attr.horizontal}`
            : undefined,
    ]);
    delete attr.flush;
    delete attr.numbered;
    delete attr.horizontal;
    return attr;
};
export class containerDiv extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const ContainerDiv = (AttrOrElem, Elem) => genTagClass(containerDiv, AttrOrElem, Elem);
