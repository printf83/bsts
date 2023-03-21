import { tagConsArg, tag } from "../core/base/tag.js";
export class h extends tag {
    constructor(...arg) {
        if (arg) {
            if (arg.length > 1) {
                let l = arg.shift();
                super(`h${l}`, tagConsArg("elem", arg));
            }
            else {
                super(`h${arg[0]}`);
            }
        }
        else {
            super("h1");
        }
    }
}
