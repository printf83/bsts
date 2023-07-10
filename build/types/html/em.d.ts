import { IAttr, IElem, tag } from "../core/tag.js";
export declare class em extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Em: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => em;
