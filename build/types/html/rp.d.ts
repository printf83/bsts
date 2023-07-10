import { IAttr, IElem, tag } from "../core/tag.js";
export declare class rp extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Rp: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => rp;
