import { bsConstArg } from "../../../../core/base/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeClass } from "../../../../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["carousel-caption"]);
    attr.display = attr.display || ["none", "md-block"];
    return attr;
};
export class caption extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
