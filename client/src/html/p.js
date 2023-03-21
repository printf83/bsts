import { tagConsArg, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, attr.lead ? "lead" : undefined);
    delete attr.lead;
    return attr;
};
export class p extends tag {
    constructor(...arg) {
        super("p", convert(tagConsArg("elem", arg)));
    }
}
