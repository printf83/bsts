import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { container as TCollapseContainer } from "../collapse/container.js";
const convert = (attr) => {
    attr.id ??= UUID();
    attr.class = mergeClass(attr.class, "navbar-collapse");
    delete attr.horizontal;
    return attr;
};
export class collapse extends TCollapseContainer {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Collapse = (AttrOrElem, Elem) => genTagClass(collapse, AttrOrElem, Elem);
