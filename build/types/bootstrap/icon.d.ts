import { IAttr, IElem } from "../core/tag.js";
import { span } from "../html/span.js";
type IAttrIconType = "bi";
export interface Icon extends IAttr {
    id?: string;
    type?: IAttrIconType;
    handleBubble?: boolean;
}
export declare class icon extends span {
    constructor();
    constructor(attr: Icon);
    constructor(elem: IElem);
    constructor(attr: Icon, elem: IElem);
    static bi: (i: string, attr?: Icon) => icon;
}
export declare const Icon: (AttrOrElem?: Icon | IElem, Elem?: IElem) => icon;
export {};
