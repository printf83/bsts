import { tagConsArg, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, attr.small ? "initialism" : undefined);
    delete attr.small;
    return attr;
};
export class abbr extends tag {
    constructor(...arg) {
        super("abbr", convert(tagConsArg("elem", arg)));
    }
}
