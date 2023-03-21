import { tagConsArg, tag } from "../core/base/tag.js";
const convert = (attr) => {
    if (attr.label) {
        attr.attrLabel = attr.label;
        delete attr.label;
    }
    return attr;
};
export class track extends tag {
    constructor(...arg) {
        super("track", convert(tagConsArg("elem", arg)));
    }
}
