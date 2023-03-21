import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.animation = attr.animation || true;
    attr = mergeObject({
        id: attr.id || UUID(),
        class: ["modal", attr.animation ? "fade" : undefined, attr.debug ? "show" : undefined],
        tabindex: "-1",
        data: {
            "bs-backdrop": attr.static ? "static" : undefined,
            "bs-keyboard": attr.static ? "false" : undefined,
        },
        aria: {
            hidden: attr.debug ? undefined : "true",
        },
        position: attr.debug ? "static" : undefined,
        display: attr.debug ? "block" : undefined,
    }, attr);
    attr.elem = new div({
        class: [
            "modal-dialog",
            attr.weight ? `modal-${attr.weight}` : undefined,
            attr.fullscreen
                ? attr.fullscreen === true
                    ? "modal-fullscreen"
                    : `modal-fullscreen-${attr.fullscreen}-down`
                : undefined,
            attr.scrollable ? "modal-dialog-scrollable" : undefined,
            attr.centered ? "modal-dialog-centered" : undefined,
        ],
    }, attr.elem ? new div({ class: "modal-content" }, attr.elem) : new div({ class: "modal-content" }));
    delete attr.static;
    delete attr.animation;
    delete attr.debug;
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
