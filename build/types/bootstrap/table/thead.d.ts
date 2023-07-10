import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { thead as TThead } from "../../html/thead.js";
export interface Thead extends IAttr {
    color?: bootstrapType.color;
}
export declare class thead extends TThead {
    constructor();
    constructor(attr: Thead);
    constructor(elem: IElem);
    constructor(attr: Thead, elem: IElem);
}
export declare const Thead: (AttrOrElem?: Thead | IElem, Elem?: IElem) => thead;
