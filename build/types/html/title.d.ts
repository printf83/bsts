import { IAttr, IElem, tag } from "../core/tag.js";
export declare class title extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Title: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => title;
