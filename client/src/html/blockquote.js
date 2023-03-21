import { tagConsArg, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "blockquote");
    return attr;
};
export class blockquote extends tag {
    constructor(...arg) {
        super("blockquote", convert(tagConsArg("elem", arg)));
    }
}
