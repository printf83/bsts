import { IAttr, IElem, tag } from "../core/tag.js";
export declare class bdi extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Bdi: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => bdi;
