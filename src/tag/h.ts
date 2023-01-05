import { baseAttr } from "../core/base/index.js";
import { tag } from "./index.js";

export class h extends tag{
    constructor(
        level:1|2|3|4|5|6,
        public elem?: string | tag | (string | tag)[],
        public attr?: baseAttr) {
        super(`h${level}`, elem, attr);
    }
}