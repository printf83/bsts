import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { UUID } from "../../../core/fn/uuid.js";
import { button as TButton } from "../../../html/button.js";
const convert = (attr) => {
    attr = mergeObject({
        id: attr.id || UUID(),
        class: ["nav-link", attr.active ? "active" : undefined],
        aria: {
            controls: attr.control,
            selected: attr.active ? "true" : "false",
        },
        role: "tab",
        data: { "bs-target": attr.target, "bs-toggle": "tab" },
    }, attr);
    delete attr.active;
    return attr;
};
export class button extends TButton {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
