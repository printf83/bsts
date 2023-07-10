import { IAttr, tag } from "../core/tag.js";
export interface Param extends IAttr {
    name?: string;
    value?: string;
}
export declare class param extends tag {
    constructor();
    constructor(attr: Param);
}
export declare const Param: (Attr?: Param) => param;
