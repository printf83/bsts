import { bsConstArg } from "../../core/base/bootstrap.js";
import { nav } from "../../html/nav.js";
import { header } from "../../html/header.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["navbar", attr.expand ? `navbar-expand-${attr.expand}` : undefined]);
    delete attr.expand;
    return attr;
};
export class container extends nav {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
export class containerHeader extends header {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
