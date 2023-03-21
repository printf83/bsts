import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { button } from "../button.js";
const convert = (attr) => {
    attr = mergeObject({
        data: {
            "bs-toggle": "offcanvas",
            "bs-target": attr.link ? undefined : attr.target,
        },
        aria: { expanded: "false", control: attr.control },
        role: attr.link ? "button" : undefined,
        href: attr.link ? attr.target : undefined,
    }, attr);
    delete attr.link;
    delete attr.target;
    delete attr.control;
    return attr;
};
export class toggle extends button {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
