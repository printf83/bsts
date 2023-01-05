import { baseAttr, tag } from "../core/base/base.interface.js";

export class div extends tag{
    constructor(
        public elem?: string | tag | (string | tag)[],
        public attr?: baseAttr) {
        super("div", elem, attr);
    }
}