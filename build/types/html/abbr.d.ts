import { IAttr, IElem, tag } from "../core/tag.js";
export interface Abbr extends IAttr {
    small?: true;
}
export declare class abbr extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Abbr);
    constructor(attr: Abbr, elem: IElem);
}
export declare const Abbr: (AttrOrElem?: Abbr | IElem, Elem?: IElem) => abbr;
