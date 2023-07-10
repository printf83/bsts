import { IAttr, IElem, tag } from "../core/tag.js";
export declare class summary extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Summary: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => summary;
