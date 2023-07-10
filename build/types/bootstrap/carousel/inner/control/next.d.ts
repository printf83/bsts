import { IElem } from "../../../../core/tag.js";
import { button as TButton, Button } from "../../../../html/button.js";
export interface Next extends Button {
    target?: string;
}
export declare class next extends TButton {
    constructor();
    constructor(attr: Next);
    constructor(elem: IElem);
    constructor(attr: Next, elem: IElem);
}
export declare const Next: (AttrOrElem?: Next | IElem, Elem?: IElem) => next;
