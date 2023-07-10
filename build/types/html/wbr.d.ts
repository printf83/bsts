import { IAttr, IElem, tag } from "../core/tag.js";
export declare class wbr extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Wbr: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => wbr;
