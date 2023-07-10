import { IAttr, IElem, tag } from "../core/tag.js";
export interface Label extends IAttr {
    for?: string;
    form?: string;
}
export declare class label extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Label);
    constructor(attr: Label, elem: IElem);
}
export declare const Label: (AttrOrElem?: Label | IElem, Elem?: IElem) => label;
