import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.placement = attr.placement || "start";
    attr = mergeObject({
        id: attr.id || UUID(),
        class: [
            !attr.hide ? "offcanvas" : undefined,
            attr.hide === false ? "show" : undefined,
            attr.hide ? (attr.hide === true ? "" : `offcanvas-${attr.hide}`) : undefined,
            attr.placement ? `offcanvas-${attr.placement}` : undefined,
        ],
        tabindex: "-1",
        textBgColor: attr.textBgColor || attr.dark ? "dark" : undefined,
        data: {
            "bs-scroll": attr.scroll ? "true" : undefined,
            "bs-backdrop": attr.backdrop
                ? attr.backdrop === true
                    ? "true"
                    : attr.backdrop
                : attr.backdrop === false
                    ? "false"
                    : undefined,
        },
        aria: {
            labelledby: attr.labelledby,
        },
        position: attr.debug ? "static" : undefined,
        display: attr.debug ? "block" : undefined,
    }, attr);
    delete attr.placement;
    delete attr.dark;
    delete attr.hide;
    delete attr.backdrop;
    delete attr.scroll;
    delete attr.labelledby;
    delete attr.debug;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
