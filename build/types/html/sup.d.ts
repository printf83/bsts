import { IAttr, IElem, tag } from "../core/tag.js";
export declare class sup extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Sup: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => sup;
