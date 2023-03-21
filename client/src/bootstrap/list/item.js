import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { li } from "../../html/li.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [
            "list-group-item",
            attr.action ? "list-group-item-action" : undefined,
            attr.color ? `list-group-item-${attr.color}` : undefined,
            attr.active ? "active" : undefined,
            attr.disabled ? "disabled" : undefined,
        ],
        aria: { disabled: attr.disabled ? "true" : undefined },
    }, attr);
    delete attr.active;
    delete attr.disabled;
    delete attr.action;
    delete attr.color;
    return attr;
};
export class item extends li {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
