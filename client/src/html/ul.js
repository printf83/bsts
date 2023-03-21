import { tagConsArg, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        attr.unstyle ? "list-unstyled" : undefined,
        attr.inline ? "list-inline" : undefined,
    ]);
    delete attr.unstyle;
    delete attr.inline;
    return attr;
};
export class ul extends tag {
    constructor(...arg) {
        super("ul", convert(tagConsArg("elem", arg)));
    }
}
