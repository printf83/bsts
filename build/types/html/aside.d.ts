import { IAttr, IElem, tag } from "../core/tag.js";
export declare class aside extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Aside: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => aside;
