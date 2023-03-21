import { tagConsArg, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [attr.inline ? "list-inline-item" : undefined]);
    delete attr.inline;
    return attr;
};
export class li extends tag {
    constructor(...arg) {
        super("li", convert(tagConsArg("elem", arg)));
    }
}
