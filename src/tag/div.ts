import { baseAttr } from "../core/base/index.js";
import { tag } from "./index.js";

export class div extends tag{
    constructor(
        public elem?: string | tag | (string | tag)[],
        public attr?: baseAttr) {
        super("div", elem, attr);
    }
}