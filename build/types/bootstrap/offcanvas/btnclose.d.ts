import { btnclose as TBtnclose, Btnclose as IBtnclose } from "../btnclose.js";
export interface Btnclose extends IBtnclose {
    dismiss?: "offcanvas";
    target?: string;
}
export declare class btnclose extends TBtnclose {
    constructor();
    constructor(attr: Btnclose);
}
export declare const Btnclose: (Attr?: Btnclose) => btnclose;
