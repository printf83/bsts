import { button, Button } from "../html/button.js";
export interface Btnclose extends Button {
    white?: boolean;
}
export declare class btnclose extends button {
    constructor();
    constructor(attr: Btnclose);
}
export declare const Btnclose: (Attr?: Btnclose) => btnclose;
