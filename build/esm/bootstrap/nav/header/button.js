import { genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { UUID } from "../../../core/uuid.js";
import { button as TButton } from "../../../html/button.js";
const handleActive = (event) => {
    const target = event.target.closest(".nav-link");
    const container = target.closest(".nav");
    if (container) {
        let lastCurrent = "";
        const lastActive = container?.querySelector(".nav-link.active");
        if (lastActive) {
            lastCurrent = lastActive.getAttribute("aria-current");
            lastActive.removeAttribute("aria-current");
            lastActive.classList.remove("active");
            container.dispatchEvent(new CustomEvent("change.bs.nav", {
                detail: {
                    target: target,
                    relatedTarget: lastActive,
                },
            }));
        }
        else {
            container.dispatchEvent(new CustomEvent("change.bs.nav", {
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
    switch (attr.toggle) {
        case "dropdown":
            attr.role ??= "button";
            break;
        case "pill":
        case "tab":
            attr.role ??= "tab";
            break;
        default:
    }
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
        id: attr.id || UUID(),
        class: [
            "nav-link",
            attr.active ? "active" : undefined,
            attr.toggle === "dropdown" ? "dropdown-toggle" : undefined,
        ],
        aria: {
            selected: attr.active ? "true" : "false",
        },
        role: attr.role,
        data: {
            "bs-target": attr.target,
            "bs-toggle": attr.toggle,
        },
    }, attr);
    delete attr.handleActive;
    delete attr.active;
    delete attr.toggle;
    delete attr.target;
    return attr;
};
export class button extends TButton {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Button = (AttrOrElem, Elem) => genTagClass(button, AttrOrElem, Elem);
