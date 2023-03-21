import { bsConstArg } from "../../src/core/base/bootstrap.js";
import { mergeObject } from "../../src/core/fn/mergeObject.js";
import { p } from "../../src/html/p.js";
const convert = (attr) => {
    attr = mergeObject({ class: "example-description", lead: true }, attr);
    return attr;
};
export class description extends p {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
