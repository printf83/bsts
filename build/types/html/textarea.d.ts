import { IAttr, tag } from "../core/tag.js";
export interface Textarea extends IAttr {
    autofocus?: boolean;
    cols?: number;
    dirname?: string;
    disabled?: boolean;
    form?: string;
    maxlength?: number;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: number;
    wrap?: "hard" | "soft";
    value?: string;
}
export declare class textarea extends tag {
    constructor();
    constructor(attr: Textarea);
}
export declare const Textarea: (Attr?: Textarea) => textarea;
