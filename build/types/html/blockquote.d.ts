import { IAttr, IElem, tag } from "../core/tag.js";
export interface Blockquote extends IAttr {
    cite?: string;
}
export declare class blockquote extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Blockquote);
    constructor(attr: Blockquote, elem: IElem);
}
export declare const Blockquote: (AttrOrElem?: Blockquote | IElem, Elem?: IElem) => blockquote;
