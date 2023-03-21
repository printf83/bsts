import { tagConsArg, tag } from "../core/base/tag.js";
export class datalist extends tag {
    constructor(...arg) {
        super("datalist", tagConsArg("elem", arg));
    }
}
