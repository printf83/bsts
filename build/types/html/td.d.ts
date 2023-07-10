import { IAttr, IElem, tag } from "../core/tag.js";
export interface Td extends IAttr {
    colspan?: number;
    headers?: string;
    rowspan?: number;
}
export declare class td extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Td);
    constructor(attr: Td, elem: IElem);
}
export declare const Td: (AttrOrElem?: Td | IElem, Elem?: IElem) => td;
