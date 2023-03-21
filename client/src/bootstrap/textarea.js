import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { UUID } from "../core/fn/uuid.js";
import { textarea as TTextarea } from "../html/textarea.js";
const convert = (attr) => {
    attr = mergeObject({
        id: attr.id || UUID(),
        class: [
            attr.readonly !== true ? "form-control" : undefined,
            attr.readonly ? "form-control-plaintext" : undefined,
            attr.weight ? `form-control-${attr.weight}` : undefined,
        ],
    }, attr);
    delete attr.weight;
    return attr;
};
export class textarea extends TTextarea {
    constructor(...arg) {
        super(bsConstArg("value", convert, arg));
    }
}
