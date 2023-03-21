import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { ul } from "../../html/ul.js";
const convert = (attr) => {
    attr = mergeObject({
        class: ["navbar-nav", attr.scroll ? "navbar-nav-scroll" : undefined],
        style: { "--bs-scroll-height": attr.scrollHeight },
    }, attr);
    return attr;
};
export class itemcontainer extends ul {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
