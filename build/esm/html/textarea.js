import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
const convert = (attr) => {
    //move value to elem
    if (attr.value) {
        if (attr.elem) {
            if (Array.isArray(attr.elem)) {
                attr.elem = [...attr.elem, attr.value];
            }
            else {
                attr.elem = [attr.elem, attr.value];
            }
        }
        else {
            attr.elem = attr.value;
        }
        delete attr.value;
    }
    return attr;
};
export class textarea extends tag {
    constructor(...arg) {
        super("textarea", convert(tagConsNoElemArg(arg)));
    }
}
export const Textarea = (Attr) => genTagClass(textarea, Attr);
