import { IAttr, IElem, tag } from "../core/tag.js";
export declare class ruby extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Ruby: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => ruby;
