import { IAttr, IElem, tag } from "../core/tag.js";
export declare class address extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Address: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => address;
