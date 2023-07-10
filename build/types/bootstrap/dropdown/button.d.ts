import { IElem } from "../../core/tag.js";
import { button as Tbutton, Button as TButton } from "../button.js";
export interface Button extends TButton {
    viewOffset?: string | number[];
    reference?: "toggle" | "parent";
    autoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";
    boundary?: string;
    positioning?: "dynamic" | "static";
    popperConfig?: object;
    split?: boolean;
    navItem?: boolean;
}
export declare class button extends Tbutton {
    constructor();
    constructor(attr: Button);
    constructor(elem: IElem);
    constructor(attr: Button, elem: IElem);
}
export declare const Toggle: (AttrOrElem?: Button | IElem, Elem?: IElem) => button;
