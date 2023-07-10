import { IAttr, IElem, tag } from "../core/tag.js";
export declare class dt extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Dt: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => dt;
