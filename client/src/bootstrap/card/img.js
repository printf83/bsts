import { isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { img as TImg } from "../../bootstrap/img.js";
const convert = (attr) => {
    if (attr.location) {
        attr.class = mergeClass(attr.class, [`card-img-${attr.location}`]);
    }
    delete attr.location;
    return attr;
};
export class img extends TImg {
    constructor(...arg) {
        if (arg.length === 0) {
            //#1
            super(convert({}));
        }
        else if (arg.length === 1) {
            if (isAttr(arg[0])) {
                //#2
                super(convert(arg[0]));
            }
            else {
                //#3
                super(convert({ src: arg[0] }));
            }
        }
    }
}
