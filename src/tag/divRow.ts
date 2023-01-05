import { baseAttr } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "./div.js";
import { tag } from "./index.js";

export class divRow extends div{
    constructor(
        public elem?: string | tag | (string | tag)[],
        public attr?: baseAttr) {
    
        attr = mergeObject(attr,{row:true})

        super(elem, attr);
    }
}