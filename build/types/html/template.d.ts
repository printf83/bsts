import { IAttr, IElem, tag } from "../core/tag.js";
export declare class template extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Template: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => template;
