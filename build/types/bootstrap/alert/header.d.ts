import { IAttr, IElem } from "../../core/tag.js";
import { h, HLevel } from "../../html/h.js";
export declare class header extends h {
    constructor();
    constructor(level: HLevel);
    constructor(level: HLevel, attr: IAttr);
    constructor(level: HLevel, elem: IElem);
    constructor(level: HLevel, attr: IAttr, elem: IElem);
}
export declare const Header: (Level: HLevel, AttrOrElem?: IAttr | IElem, Elem?: IElem) => header;
