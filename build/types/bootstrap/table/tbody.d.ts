import { IAttr, IElem } from "../../core/tag.js";
import { tbody as TTbody } from "../../html/tbody.js";
export interface Tbody extends IAttr {
    divider?: boolean;
}
export declare class tbody extends TTbody {
    constructor();
    constructor(attr: Tbody);
    constructor(elem: IElem);
    constructor(attr: Tbody, elem: IElem);
}
export declare const Tbody: (AttrOrElem?: Tbody | IElem, Elem?: IElem) => tbody;
