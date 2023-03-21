import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { ul } from "../../../html/ul.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [
            "nav",
            attr.type ? `nav-${attr.type}s` : undefined,
            attr.itemWidth ? `nav-${attr.itemWidth}` : undefined,
            attr.vertical ? "flex-column" : undefined,
        ],
        aria: {
            orientation: attr.vertical ? "vertical" : undefined,
        },
    }, attr);
    delete attr.type;
    delete attr.itemWidth;
    delete attr.vertical;
    return attr;
};
export class container extends ul {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
