import { IElem } from "../../core/tag.js";
import { a, A } from "../../html/a.js";
export declare class link extends a {
    constructor();
    constructor(attr: A);
    constructor(elem: IElem);
    constructor(attr: A, elem: IElem);
}
export declare const Link: (AttrOrElem?: A | IElem, Elem?: IElem) => link;
