import { IAttr, IElem, tag } from "../core/tag.js";
export declare class mark extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Mark: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => mark;
