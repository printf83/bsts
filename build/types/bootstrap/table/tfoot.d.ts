import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { tfoot as TTfoot } from "../../html/tfoot.js";
export interface Tfoot extends IAttr {
    color?: bootstrapType.color;
}
export declare class tfoot extends TTfoot {
    constructor();
    constructor(attr: Tfoot);
    constructor(elem: IElem);
    constructor(attr: Tfoot, elem: IElem);
}
export declare const Tfoot: (AttrOrElem?: Tfoot | IElem, Elem?: IElem) => tfoot;
