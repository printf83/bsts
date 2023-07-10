import { IAttr, IElem, tag } from "../core/tag.js";
export declare class dd extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Dd: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => dd;
