import { IAttr, IElem, tag } from "../../core/tag.js";
export interface Brand extends IAttr {
    href?: string;
}
export declare class brand extends tag {
    constructor();
    constructor(attr: Brand);
    constructor(elem: IElem);
    constructor(attr: Brand, elem: IElem);
}
export declare const Brand: (AttrOrElem?: Brand | IElem, Elem?: IElem) => brand;
