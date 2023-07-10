import { IAttr, IElem, tag } from "../core/tag.js";
export interface Progress extends IAttr {
    max?: number;
    value?: number;
}
export declare class progress extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Progress);
    constructor(attr: Progress, elem: IElem);
}
export declare const Progress: (AttrOrElem?: Progress | IElem, Elem?: IElem) => progress;
