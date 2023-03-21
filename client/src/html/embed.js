import { tag } from "../core/base/tag.js";
export class embed extends tag {
    constructor(...arg) {
        if (arg.length === 0) {
            //#1
            super("embed");
        }
        else if (arg.length === 2) {
            //#2
            super("embed", { type: arg[0], src: arg[1] });
        }
        else if (arg.length === 1) {
            //#3
            super("embed", arg[0]);
        }
    }
}
