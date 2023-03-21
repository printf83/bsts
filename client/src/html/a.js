import { tag, tagConsArg } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        attr.color ? `link-${attr.color}` : undefined,
        attr.stretched ? "stretched-link" : undefined,
    ]);
    delete attr.color;
    delete attr.stretched;
    return attr;
};
export class a extends tag {
    constructor(...arg) {
        super("a", convert(tagConsArg("elem", arg)));
    }
}
