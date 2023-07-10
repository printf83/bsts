import { IAttr, IElem, tag } from "../core/tag.js";
import { Optgroup } from "./optgroup.js";
import { Option } from "./option.js";
export interface SelectItem extends Option, Optgroup {
    value?: string;
    label?: string;
    elem?: IElem;
    selected?: boolean;
    item?: SelectItem | SelectItem[];
}
export interface Select extends IAttr {
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
    item?: SelectItem | SelectItem[];
}
export declare class select extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Select);
    constructor(attr: Select, elem: IElem);
}
export declare const Select: (AttrOrElem?: Select | IElem, Elem?: IElem) => select;
