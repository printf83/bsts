import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { tr as TTr } from "../../html/tr.js";
export interface Tr extends IAttr {
    color?: bootstrapType.color;
    active?: boolean;
}
export declare class tr extends TTr {
    constructor();
    constructor(attr: Tr);
    constructor(elem: IElem);
    constructor(attr: Tr, elem: IElem);
}
export declare const Tr: (AttrOrElem?: Tr | IElem, Elem?: IElem) => tr;
