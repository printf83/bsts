import { IAttr, IElem, tag } from "../core/tag.js";
export declare class section extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Section: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => section;
