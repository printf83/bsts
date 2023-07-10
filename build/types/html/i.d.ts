import { IAttr, IElem, tag } from "../core/tag.js";
export declare class i extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const I: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => i;
