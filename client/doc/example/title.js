import { bsConstArg } from "../../src/core/base/bootstrap.js";
import { mergeObject } from "../../src/core/fn/mergeObject.js";
import { UUID } from "../../src/core/fn/uuid.js";
import { a } from "../../src/html/a.js";
import { h } from "../../src/html/h.js";
const convert = (attr) => {
    attr.id = attr.id || UUID();
    attr = mergeObject({ class: "example-title", marginTop: 5 }, attr);
    if (attr.elem) {
        let strElem = "";
        if (typeof attr.elem === "string") {
            strElem = attr.elem;
        }
        else {
            strElem = `#${attr.id}`;
        }
        let tElem = [];
        if (Array.isArray(attr.elem)) {
            tElem = attr.elem;
        }
        else {
            tElem = [attr.elem];
        }
        tElem.push(new a({
            class: "anchor-link",
            href: `#${attr.id}`,
            aria: { label: `Link to this section: ${strElem}` },
        }, ""));
        attr.elem = tElem;
    }
    return attr;
};
export class title extends h {
    constructor(...arg) {
        super(2, bsConstArg("elem", convert, arg));
    }
}
