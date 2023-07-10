import { IAttr, IElem, tag } from "../core/tag.js";
export declare class sub extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Sub: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => sub;
