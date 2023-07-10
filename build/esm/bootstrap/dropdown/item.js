import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a } from "../../html/a.js";
const handleActive = (event) => {
    const target = event.target.closest(".dropdown-item");
    const container = target.closest(".dropdown-menu");
    if (container) {
        let lastCurrent = "";
        const lastActive = container?.querySelector(".dropdown-item.active");
        if (lastActive) {
            lastCurrent = lastActive.getAttribute("aria-current");
            lastActive.removeAttribute("aria-current");
            lastActive.classList.remove("active");
            container.dispatchEvent(new CustomEvent("change.bs.menu", {
                detail: {
                    target: target,
                    relatedTarget: lastActive,
                },
            }));
        }
        else {
            container.dispatchEvent(new CustomEvent("change.bs.menu", {
                detail: {
                    target: target,
                    relatedTarget: null,
                },
            }));
        }
        target.setAttribute("aria-current", lastCurrent ? lastCurrent : "page");
        target.classList.add("active");
    }
};
const convert = (attr) => {
    //handle item active
    if (attr.handleActive) {
        if (attr.on) {
            if (!attr.on.click) {
                attr.on["click"] = handleActive;
            }
        }
        else {
            attr.on = {
                click: handleActive,
            };
        }
    }
    attr = mergeObject({
        class: ["dropdown-item", attr.active ? "active" : undefined],
        aria: { current: attr.active ? (attr.current ? attr.current : "true") : undefined },
    }, attr);
    delete attr.handleActive;
    delete attr.active;
    delete attr.current;
    return attr;
};
export class item extends a {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Item = (AttrOrElem, Elem) => genTagClass(item, AttrOrElem, Elem);
