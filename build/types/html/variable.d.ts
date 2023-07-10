import { IAttr, IElem, tag } from "../core/tag.js";
export declare class variable extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Variable: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => variable;
