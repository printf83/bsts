import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { genTagClass } from "../core/tag.js";
import { UUID } from "../core/uuid.js";
import { textarea as TTextarea } from "../html/textarea.js";
const convert = (attr) => {
    attr = mergeObject({
        id: attr.id || UUID(),
        class: [
            attr.readonly !== true ? "form-control" : undefined,
            attr.readonly ? "form-control-plaintext" : undefined,
            attr.weight ? `form-control-${attr.weight}` : undefined,
            attr.isvalid !== undefined ? (attr.isvalid ? "is-valid" : "is-invalid") : undefined,
        ],
    }, attr);
    delete attr.weight;
    delete attr.isvalid;
    return attr;
};
export class textarea extends TTextarea {
    constructor(...arg) {
        super(convert(bsConstArg("value", arg)));
    }
}
export const Textarea = (AttrOrValue, Value) => genTagClass(textarea, AttrOrValue, Value);
