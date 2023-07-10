import { IAttr, IElem, tag } from "../core/tag.js";
export interface Option extends IAttr {
    disabled?: boolean;
    selected?: boolean;
    value?: string;
}
export declare class option extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Option);
    constructor(attr: Option, elem: IElem);
}
export declare const Option: (AttrOrElem?: Option | IElem, Elem?: IElem) => option;
