import { IAttr, IElem, tag } from "../core/tag.js";
export interface Map extends IAttr {
    name?: string;
}
export declare class map extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Map);
    constructor(attr: Map, elem: IElem);
}
export declare const Map: (AttrOrElem?: Map | IElem, Elem?: IElem) => map;
