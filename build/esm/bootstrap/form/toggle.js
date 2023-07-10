import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { input as TInput } from "../input.js";
import { label } from "../label.js";
export const Toggle = (attr) => {
    attr.id ??= UUID();
    attr.label ??= attr.id;
    let tLabel = new label(mergeObject({
        for: attr.id,
    }, attr.container), attr.label);
    attr.toggle = true;
    delete attr.container;
    let tElem = new TInput(attr);
    return [tElem, tLabel];
};
