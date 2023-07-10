import { IAttr, IElem, tag } from "../core/tag.js";
export declare class tfoot extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Tfoot: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => tfoot;
