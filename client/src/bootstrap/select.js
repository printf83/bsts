import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { UUID } from "../core/fn/uuid.js";
import { select as TSelect } from "../html/select.js";
const convert = (attr) => {
    attr = mergeObject({
        id: attr.id || UUID(),
        class: ["form-select", attr.weight ? `form-select-${attr.weight}` : undefined],
    }, attr);
    delete attr.weight;
    return attr;
};
export class select extends TSelect {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
