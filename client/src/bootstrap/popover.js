import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { span } from "../html/span.js";
const convert = (attr) => {
    attr = mergeObject({
        display: attr.inline ? "inline-block" : undefined,
        tabindex: "0",
        data: {
            "bs-toggle": "popover",
            "bs-custom-class": attr.customClass,
            "bs-title": attr.title,
            "bs-content": attr.content,
            "bs-container": attr.parent,
            "bs-placement": attr.placement,
            "bs-trigger": attr.trigger
                ? Array.isArray(attr.trigger)
                    ? attr.trigger.join(" ")
                    : attr.trigger
                : undefined,
        },
    }, attr);
    delete attr.inline;
    delete attr.trigger;
    delete attr.title;
    delete attr.content;
    delete attr.placement;
    delete attr.customClass;
    delete attr.parent;
    return attr;
};
export class popover extends span {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
