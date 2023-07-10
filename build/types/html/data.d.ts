import { IAttr, IElem, tag } from "../core/tag.js";
export interface Data extends IAttr {
    value?: string;
}
export declare class data extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Data);
    constructor(attr: Data, elem: IElem);
}
export declare const Data: (AttrOrElem?: Data | IElem, Elem?: IElem) => data;
