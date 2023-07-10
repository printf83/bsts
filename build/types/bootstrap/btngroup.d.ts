import { IAttr, IElem } from "../core/tag.js";
import { div } from "../html/div.js";
export interface Btngroup extends Omit<IAttr, "role"> {
    role?: "group" | "toolbar";
    weight?: "sm" | "lg";
    vertical?: boolean;
}
export declare class btngroup extends div {
    constructor();
    constructor(attr: Btngroup);
    constructor(elem: IElem);
    constructor(attr: Btngroup, elem: IElem);
}
export declare const Btngroup: (AttrOrElem?: Btngroup | IElem, Elem?: IElem) => btngroup;
