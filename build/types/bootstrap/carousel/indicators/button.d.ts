import { IElem } from "../../../core/tag.js";
import { button as TButton, Button as IButton } from "../../../html/button.js";
export interface Button extends IButton {
    active?: boolean;
    slide?: number;
    target?: string;
}
export declare class button extends TButton {
    constructor();
    constructor(attr: Button);
    constructor(elem: IElem);
    constructor(attr: Button, elem: IElem);
}
export declare const Button: (AttrOrElem?: Button | IElem, Elem?: IElem) => button;
