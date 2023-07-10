import { IElem } from "../../../../core/tag.js";
import { button as TButton, Button } from "../../../../html/button.js";
export interface Prev extends Button {
    target?: string;
}
export declare class prev extends TButton {
    constructor();
    constructor(attr: Prev);
    constructor(elem: IElem);
    constructor(attr: Prev, elem: IElem);
}
export declare const Prev: (AttrOrElem?: Prev | IElem, Elem?: IElem) => prev;
