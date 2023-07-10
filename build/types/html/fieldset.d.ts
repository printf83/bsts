import { IAttr, IElem, tag } from "../core/tag.js";
export interface Fieldset extends IAttr {
    disabled?: boolean;
    form?: string;
    name?: string;
}
export declare class fieldset extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Fieldset);
    constructor(attr: Fieldset, elem: IElem);
}
export declare const Fieldset: (AttrOrElem?: Fieldset | IElem, Elem?: IElem) => fieldset;
