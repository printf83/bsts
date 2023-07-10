import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { ul } from "../../html/ul.js";
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
export class container extends ul {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);
