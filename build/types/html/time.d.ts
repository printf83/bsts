import { IAttr, IElem, tag } from "../core/tag.js";
export interface Time extends IAttr {
    datetime?: Date;
}
export declare class time extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Time);
    constructor(attr: Time, elem: IElem);
}
export declare const Time: (AttrOrElem?: Time | IElem, Elem?: IElem) => time;
