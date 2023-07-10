import { genTagClass, tag, tagConsArg } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { mergeObject } from "../core/mergeObject.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        attr.color ? `link-${attr.color}` : undefined,
        attr.stretched ? "stretched-link" : undefined,
        attr.disabled ? "disabled" : undefined,
    ]);
    if (attr.disabled) {
        delete attr.href;
        attr = mergeObject({
            aria: { disabled: "true" },
            tabindex: -1,
        }, attr);
    }
    delete attr.color;
    delete attr.stretched;
    delete attr.disabled;
    return attr;
};
export class a extends tag {
    constructor(...arg) {
        super("a", convert(tagConsArg("elem", arg)));
    }
}
export const A = (AttrOrElem, Elem) => genTagClass(a, AttrOrElem, Elem);
