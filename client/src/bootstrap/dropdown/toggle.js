import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { button } from "../button.js";
import { visuallyhidden } from "../visuallyhidden.js";
const convert = (attr) => {
    if (attr.menuAutoClose) {
        if (attr.menuAutoClose === "auto")
            attr.menuAutoClose = "true";
        if (attr.menuAutoClose === "manual")
            attr.menuAutoClose = "false";
    }
    attr = mergeObject({
        class: ["dropdown-toggle", attr.split ? "dropdown-toggle-split" : undefined],
        data: {
            "bs-toggle": "dropdown",
            "bs-offset": attr.menuOffset,
            "bs-reference": attr.menuReference,
            "bs-auto-close": attr.menuAutoClose,
        },
        aria: { expanded: "false" },
    }, attr);
    if (attr.split) {
        attr.elem = new visuallyhidden(attr.elem || "Toggle dropdown");
    }
    else {
        attr.elem = attr.elem || "Dropdown";
    }
    delete attr.menuOffset;
    delete attr.menuReference;
    delete attr.menuAutoClose;
    delete attr.split;
    return attr;
};
export class toggle extends button {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
