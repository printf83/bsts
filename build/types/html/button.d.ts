import { IAttr, IElem, tag } from "../core/tag.js";
export interface Button extends IAttr {
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    formaction?: string;
    formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain	";
    formmethod?: "get" | "post";
    formnovalidate?: boolean;
    formtarget?: string;
    name?: string;
    type?: "button" | "reset" | "submit";
    value?: string;
}
export declare class button extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Button);
    constructor(attr: Button, elem: IElem);
}
export declare const Button: (AttrOrElem?: Button | IElem, Elem?: IElem) => button;
