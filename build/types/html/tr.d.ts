import { IAttr, IElem, tag } from "../core/tag.js";
export declare class tr extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Tr: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => tr;
