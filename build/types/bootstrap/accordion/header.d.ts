import { IElem } from "../../core/tag.js";
import { h } from "../../html/h.js";
import { Button } from "../collapse/button.js";
export declare class header extends h {
    constructor();
    constructor(attr: Button);
    constructor(elem: IElem);
    constructor(attr: Button, elem: IElem);
}
export declare const Header: (AttrOrElem?: Button | IElem, Elem?: IElem) => header;
