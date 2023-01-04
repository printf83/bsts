import { baseAttr, tag } from "../core/base/base.interface.js";

export class span extends tag{
    constructor(
        public elem?: string | tag | (string | tag)[],
        public attr?: baseAttr) {
        super("span", elem, attr);
    }
}