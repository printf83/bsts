import { genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";
const convert = (attr) => {
    attr = mergeObject({
        display: "grid",
        gap: 3,
    }, attr);
    return attr;
};
export class grid extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Grid = (AttrOrElem, Elem) => genTagClass(grid, AttrOrElem, Elem);
