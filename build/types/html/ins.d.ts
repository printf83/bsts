import { IAttr, IElem, tag } from "../core/tag.js";
export interface Ins extends IAttr {
    cite?: string;
    datetime?: string | Date;
}
export declare class ins extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Ins);
    constructor(attr: Ins, elem: IElem);
}
export declare const Ins: (AttrOrElem?: Ins | IElem, Elem?: IElem) => ins;
