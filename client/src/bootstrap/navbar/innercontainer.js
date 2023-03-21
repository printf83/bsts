import { bsConstArg } from "../../core/base/bootstrap.js";
import { div } from "../../html/div.js";
import { nav } from "../../html/nav.js";
const convert = (attr) => {
    return attr;
};
export class innercontainer extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
export class innercontainerNav extends nav {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
