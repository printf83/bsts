import { IElem } from "../../core/tag.js";
import { Ul, ul } from "../../html/ul.js";
export interface Itemcontainer extends Ul {
    scroll?: boolean;
    scrollHeight?: string;
}
export declare class itemcontainer extends ul {
    constructor();
    constructor(attr: Itemcontainer);
    constructor(elem: IElem);
    constructor(attr: Itemcontainer, elem: IElem);
}
export declare const Itemcontainer: (AttrOrElem?: Itemcontainer | IElem, Elem?: IElem) => itemcontainer;
