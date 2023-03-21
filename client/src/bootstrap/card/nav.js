import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { container as BSNavHeaderContainer } from "../nav/header/container.js";
const convert = (attr) => {
    attr.type = attr.type || "tab";
    attr.class = mergeClass(attr.class, `card-header-${attr.type}s`);
    return attr;
};
export class nav extends BSNavHeaderContainer {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
