import { IAttr, IElem, tag } from "../core/tag.js";
export interface Details extends IAttr {
    open?: boolean;
}
export declare class details extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Details);
    constructor(attr: Details, elem: IElem);
}
export declare const Details: (AttrOrElem?: Details | IElem, Elem?: IElem) => details;
