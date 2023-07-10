import { IAttr, IElem, tag } from "../core/tag.js";
export declare class samp extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Samp: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => samp;
