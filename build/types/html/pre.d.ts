import { IAttr, IElem, tag } from "../core/tag.js";
export declare class pre extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Pre: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => pre;
