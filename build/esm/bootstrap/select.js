import { genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { UUID } from "../core/uuid.js";
import { select as TSelect } from "../html/select.js";
const convert = (attr) => {
    attr = mergeObject({
        id: attr.id || UUID(),
        class: [
            "form-select",
            attr.weight ? `form-select-${attr.weight}` : undefined,
            attr.isvalid !== undefined ? (attr.isvalid ? "is-valid" : "is-invalid") : undefined,
        ],
    }, attr);
    delete attr.weight;
    delete attr.isvalid;
    return attr;
};
export class select extends TSelect {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Select = (AttrOrElem, Elem) => genTagClass(select, AttrOrElem, Elem);
