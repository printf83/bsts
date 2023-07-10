import { bootstrapType } from "../core/bootstrap.js";
import { IElem, tag } from "../core/tag.js";
import { Button as TButton } from "../html/button.js";
import { Button as BSButton } from "bootstrap";
export interface Button extends Omit<TButton, "role"> {
    color?: bootstrapType.btnColor;
    outline?: boolean;
    dismiss?: "modal" | "alert" | "offcanvas" | "toast";
    weight?: "lg" | "sm";
    toggle?: true | "button" | "tab" | "modal";
    href?: string;
    role?: "button" | "tab";
    target?: string;
    stretched?: boolean;
    active?: boolean;
    defColor?: boolean;
}
export declare class button extends tag {
    constructor();
    constructor(attr: Button);
    constructor(elem: IElem);
    constructor(attr: Button, elem: IElem);
    static init: (elem: Element | string) => BSButton;
    static getInstance: (elem: Element | string) => BSButton | null;
    static getOrCreateInstance: (elem: Element | string) => BSButton;
    static toggle: (elem: Element | string) => void;
    static dispose: (elem: Element | string) => void;
}
export declare const Button: (AttrOrElem?: Button | IElem, Elem?: IElem) => button;
