import { IAttr, IElem, tag } from "../core/tag.js";
export interface Li extends IAttr {
    value?: string;
    inline?: boolean;
}
export declare class li extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Li);
    constructor(attr: Li, elem: IElem);
}
export declare const Li: (AttrOrElem?: Li | IElem, Elem?: IElem) => li;
