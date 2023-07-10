import { IElem } from "../../core/tag.js";
import { button as Tbutton, Button as TButton } from "../button.js";
export interface Button extends TButton {
    link?: true;
    target?: string;
}
export declare class button extends Tbutton {
    constructor();
    constructor(attr: Button);
    constructor(elem: IElem);
    constructor(attr: Button, elem: IElem);
}
export declare const Toggle: (AttrOrElem?: Button | IElem, Elem?: IElem) => button;
