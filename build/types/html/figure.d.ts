import { IAttr, IElem, tag } from "../core/tag.js";
export declare class figure extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Figure: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => figure;
