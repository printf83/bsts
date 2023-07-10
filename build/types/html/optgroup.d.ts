import { IAttr, IElem, tag } from "../core/tag.js";
import { Option } from "./option.js";
export interface Optgroup extends IAttr {
    disabled?: boolean;
    label?: string;
    attrLabel?: string;
    item?: Option | Option[];
}
export declare class optgroup extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Optgroup);
    constructor(attr: Optgroup, elem: IElem);
}
export declare const Optgroup: (AttrOrElem?: Optgroup | IElem, Elem?: IElem) => optgroup;
