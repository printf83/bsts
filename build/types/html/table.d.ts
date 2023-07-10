import { IAttr, IElem, tag } from "../core/tag.js";
export declare class table extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Table: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => table;
