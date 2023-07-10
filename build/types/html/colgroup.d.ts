import { IAttr, IElem, tag } from "../core/tag.js";
export interface Colgroup extends IAttr {
    span?: number;
}
export declare class colgroup extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Colgroup);
    constructor(attr: Colgroup, elem: IElem);
}
export declare const Colgroup: (AttrOrElem?: Colgroup | IElem, Elem?: IElem) => colgroup;
