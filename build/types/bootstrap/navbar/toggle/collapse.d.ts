import { IElem } from "../../../core/tag.js";
import { Button, button } from "../../collapse/button.js";
export declare class collapse extends button {
    constructor();
    constructor(attr: Button);
    constructor(elem: IElem);
    constructor(attr: Button, elem: IElem);
}
export declare const Collapse: (AttrOrElem?: Button | IElem, Elem?: IElem) => collapse;
