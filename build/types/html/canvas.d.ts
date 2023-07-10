import { IAttr, IElem, tag } from "../core/tag.js";
export declare class canvas extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Canvas: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => canvas;
