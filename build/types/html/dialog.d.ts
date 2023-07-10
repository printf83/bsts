import { IAttr, IElem, tag } from "../core/tag.js";
export interface Dialog extends IAttr {
    open?: boolean;
}
export declare class dialog extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Dialog);
    constructor(attr: Dialog, elem: IElem);
}
export declare const Dialog: (AttrOrElem?: Dialog | IElem, Elem?: IElem) => dialog;
