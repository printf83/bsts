import { IAttr, IElem, tag } from "../core/tag.js";
export interface Visuallyhidden extends IAttr {
    focusable?: boolean;
    href?: string;
}
export declare class visuallyhidden extends tag {
    constructor();
    constructor(attr: Visuallyhidden);
    constructor(elem: IElem);
    constructor(attr: Visuallyhidden, elem: IElem);
}
export declare const Visuallyhidden: (AttrOrElem?: Visuallyhidden | IElem, Elem?: IElem) => visuallyhidden;
