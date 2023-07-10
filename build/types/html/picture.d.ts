import { IAttr, IElem, tag } from "../core/tag.js";
export interface Picture extends IAttr {
    dataText?: string;
    form?: string;
    name?: string;
    type?: string;
    typemustmatch?: boolean;
    usemap?: string;
}
export declare class picture extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Picture);
    constructor(attr: Picture, elem: IElem);
}
export declare const Picture: (AttrOrElem?: Picture | IElem, Elem?: IElem) => picture;
