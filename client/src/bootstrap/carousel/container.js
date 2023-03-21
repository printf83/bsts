import { bsConstArg } from "../../core/base/bootstrap.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
const convert = (attr) => {
    attr.autoPlay = attr.autoPlay !== false ? true : false;
    attr = mergeObject({
        class: ["carousel", "slide"],
        data: {
            "bs-ride": attr.autoPlay === true ? "carousel" : "true",
            "bs-touch": attr.disableTouch ? "false" : undefined,
        },
    }, attr);
    delete attr.fade;
    delete attr.autoPlay;
    delete attr.disableTouch;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
