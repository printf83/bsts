import { IAttr, IElem, tag } from "../core/tag.js";
export interface Del extends IAttr {
    cite?: string;
    datetime?: string | Date;
}
export declare class del extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Del);
    constructor(attr: Del, elem: IElem);
}
export declare const Del: (AttrOrElem?: Del | IElem, Elem?: IElem) => del;
