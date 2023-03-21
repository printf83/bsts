import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { nav } from "../../html/nav.js";
import { ol } from "../../html/ol.js";
const convert = (attr) => {
    attr = mergeObject({
        style: {
            "--bs-breadcrumb-divider": attr.divider ? attr.divider : undefined,
        },
    }, attr);
    if (attr.elem) {
        attr.elem = new ol({
            class: "breadcrumb",
        }, attr.elem);
    }
    else {
        attr.elem = new ol({
            class: "breadcrumb",
        });
    }
    delete attr.label;
    return attr;
};
export class container extends nav {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
