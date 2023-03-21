import { bsConstArg } from "../../../../core/base/bootstrap.js";
import { button as TButton } from "../../../../html/button.js";
import { mergeObject } from "../../../../core/fn/mergeObject.js";
import { span } from "../../../../html/span.js";
import { visuallyhidden } from "../../../visuallyhidden.js";
const convert = (attr) => {
    attr = mergeObject({
        class: "carousel-control-next",
        data: {
            "bs-target": attr.target,
            "bs-slide": "next",
        },
    }, attr);
    if (!attr.elem) {
        attr.elem = [
            new span({ class: "carousel-control-next-icon", aria: { hidden: "true" } }),
            new visuallyhidden("Next"),
        ];
    }
    delete attr.target;
    return attr;
};
export class next extends TButton {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
