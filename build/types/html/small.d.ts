import { IAttr, IElem, tag } from "../core/tag.js";
export declare class small extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Small: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => small;
