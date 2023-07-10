import { IAttr, IElem, tag } from "../core/tag.js";
export declare class thead extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Thead: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => thead;
