import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { Ul, ul } from "../../html/ul.js";
export interface Container extends Ul {
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean | bootstrapType.viewport;
}
export declare class container extends ul {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
