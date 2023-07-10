import { IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { Td as ITd, td as TTd } from "../../html/td.js";
export interface Td extends ITd {
    color?: bootstrapType.color;
    active?: boolean;
    responsiveAttr?: string;
    responsiveTitle?: string;
}
export declare class td extends TTd {
    constructor();
    constructor(attr: Td);
    constructor(elem: IElem);
    constructor(attr: Td, elem: IElem);
}
export declare const Td: (AttrOrElem?: Td | IElem, Elem?: IElem) => td;
