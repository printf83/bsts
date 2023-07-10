import { IElem } from "../../../core/tag.js";
import { button as TButton, Button as IButton } from "../../../html/button.js";
export interface Button extends IButton {
    role?: "tab" | "button";
    toggle?: "dropdown" | "pill" | "tab";
    target?: string;
    active?: boolean;
    handleActive?: boolean;
}
export declare class button extends TButton {
    constructor();
    constructor(attr: Button);
    constructor(elem: IElem);
    constructor(attr: Button, elem: IElem);
}
export declare const Button: (AttrOrElem?: Button | IElem, Elem?: IElem) => button;
