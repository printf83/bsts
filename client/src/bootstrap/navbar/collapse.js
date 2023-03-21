import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { container as TCollapseContainer } from "../collapse/container.js";
const convert = (attr) => {
    attr.id = attr.id || UUID();
    attr.class = mergeClass(attr.class, "navbar-collapse");
    delete attr.horizontal;
    return attr;
};
export class collapse extends TCollapseContainer {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
