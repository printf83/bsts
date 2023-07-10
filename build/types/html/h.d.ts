import { IAttr, IElem, tag } from "../core/tag.js";
export type HLevel = 1 | 2 | 3 | 4 | 5 | 6;
export declare class h extends tag {
    constructor();
    constructor(level: HLevel);
    constructor(level: HLevel, elem: IElem);
    constructor(level: HLevel, attr: IAttr);
    constructor(level: HLevel, attr: IAttr, elem: IElem);
}
export declare const H: (Level: HLevel, AttrOrElem?: IAttr | IElem, Elem?: IElem) => h;
