import { IAttr, IElem, tag } from "../core/tag.js";
export declare class kbd extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Kbd: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => kbd;
