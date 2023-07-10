import { IAttr, IElem, tag } from "../core/tag.js";
export declare class b extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const B: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => b;
