import { tagConsArg, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        attr.unstyle ? "list-unstyle" : undefined,
        attr.inline ? "list-inline" : undefined,
    ]);
    delete attr.unstyle;
    delete attr.inline;
    return attr;
};
export class ol extends tag {
    constructor(...arg) {
        super("ol", convert(tagConsArg("elem", arg)));
    }
}
