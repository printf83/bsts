import { IAttr, IElem } from "../../core/tag.js";
import { strong } from "../../html/strong.js";
export declare class title extends strong {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Title: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => title;
