import { IAttr, IElem, tag } from "../core/tag.js";
export declare class u extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const U: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => u;
