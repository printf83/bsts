import { IAttr, IElem, tag } from "../core/tag.js";
export declare class span extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Span: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => span;
