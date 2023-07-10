import { IAttr, IElem, tag } from "../core/tag.js";
export declare class figcaption extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Figcaption: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => figcaption;
