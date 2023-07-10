import { bsConstArg } from "../core/bootstrap.js";
import { genTagClass } from "../core/tag.js";
import { mergeObject } from "../core/mergeObject.js";
import { i } from "../html/i.js";
import { span } from "../html/span.js";
const bubbleEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target;
    const a = target.closest("a");
    if (a) {
        a.click();
    }
    else {
        const button = target.closest("button");
        if (button) {
            button.click();
        }
    }
};
const convert = (attr) => {
    if (!attr.id && attr.elem && typeof attr.elem === "string") {
        attr.id = attr.elem;
        attr.elem = undefined;
    }
    if (!attr.type && attr.id && attr.id.indexOf(" ") > -1) {
        let sid = attr.id.split(" ");
        if (sid.length === 2) {
            switch (sid[0]) {
                case "bi":
                    attr.type = sid[0];
                    attr.id = sid[1];
                    break;
                default:
                    console.error("unsupported icon type", attr.id);
            }
        }
    }
    attr.type ??= "bi";
    if (attr.type === "bi") {
        attr = mergeObject({
            class: ["bi", attr.id ? `bi-${attr.id}` : undefined],
        }, attr);
    }
    delete attr.id;
    let handleBubble = attr.handleBubble;
    delete attr.handleBubble;
    if (attr.type === "bi") {
        delete attr.type;
        return {
            aria: { hidden: true },
            class: "bs-ico-bi",
            on: {
                click: handleBubble ? bubbleEvent : undefined,
            },
            elem: new i(attr),
            // data: { class: attr.class ? (Array.isArray(attr.class) ? attr.class.join(" ") : attr.class) : undefined },
        };
    }
    else {
        delete attr.type;
        return {
            aria: { hidden: true },
            class: "bs-ico-unknow",
            on: {
                click: handleBubble ? bubbleEvent : undefined,
            },
            elem: new i(attr),
            // data: { class: attr.class ? (Array.isArray(attr.class) ? attr.class.join(" ") : attr.class) : undefined },
        };
    }
};
const genStaticIcon = (t, i, a) => {
    if (a) {
        delete a.type;
        delete a.id;
        return new icon(mergeObject({ type: t, id: i }, a));
    }
    else {
        return new icon({ type: t, id: i });
    }
};
class icon extends span {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
    static bi = (i, attr) => genStaticIcon("bi", i, attr);
}
export { icon };
export const Icon = (AttrOrElem, Elem) => genTagClass(icon, AttrOrElem, Elem);
