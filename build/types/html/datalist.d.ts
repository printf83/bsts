import { IAttr, IElem, tag } from "../core/tag.js";
export interface Datalist extends IAttr {
    item?: string | string[];
}
export declare class datalist extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Datalist);
    constructor(attr: Datalist, elem: IElem);
}
export declare const Datalist: (AttrOrElem?: Datalist | IElem, Elem?: IElem) => datalist;
