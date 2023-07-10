import { IAttr, IElem, tag } from "../core/tag.js";
export declare class header extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Header: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => header;
