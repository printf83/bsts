import { IAttr, IElem, tag } from "../core/tag.js";
export interface Obj extends IAttr {
    dataText?: string;
    form?: string;
    name?: string;
    type?: string;
    typemustmatch?: boolean;
    usemap?: string;
}
export declare class obj extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Obj);
    constructor(attr: Obj, elem: IElem);
}
export declare const Obj: (AttrOrElem?: Obj | IElem, Elem?: IElem) => obj;
