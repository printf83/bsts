import { IElem } from "../../../core/tag.js";
import { a, A } from "../../../html/a.js";
export interface Link extends A {
    role?: "tab" | "button";
    toggle?: "dropdown" | "pill" | "tab";
    active?: boolean;
    current?: true | "page";
    handleActive?: boolean;
}
export declare class link extends a {
    constructor();
    constructor(attr: Link);
    constructor(elem: IElem);
    constructor(attr: Link, elem: IElem);
}
export declare const Link: (AttrOrElem?: Link | IElem, Elem?: IElem) => link;
