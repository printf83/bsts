import { tagConsArg, tag } from "../core/base/tag.js";
const convert = (attr) => {
    if (attr.label) {
        attr.attrLabel = attr.label;
        delete attr.label;
    }
    return attr;
};
export class optgroup extends tag {
    constructor(...arg) {
        super("optgroup", convert(tagConsArg("elem", arg)));
    }
}
