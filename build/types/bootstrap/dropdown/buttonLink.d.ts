import { IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { a, A } from "../../html/a.js";
export interface ButtonLink extends A {
    viewOffset?: string | number[];
    reference?: "toggle" | "parent";
    autoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";
    boundary?: string;
    positioning?: "dynamic" | "static";
    popperConfig?: object;
    split?: boolean;
    navItem?: boolean;
    color?: bootstrapType.linkColor;
}
export declare class buttonLink extends a {
    constructor();
    constructor(attr: ButtonLink);
    constructor(elem: IElem);
    constructor(attr: ButtonLink, elem: IElem);
}
export declare const ToggleLink: (AttrOrElem?: ButtonLink | IElem, Elem?: IElem) => buttonLink;
