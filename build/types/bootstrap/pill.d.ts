import { bootstrapType } from "../core/bootstrap.js";
import { IAttr } from "../core/tag.js";
import { small } from "../html/small.js";
import { Icon, icon } from "./icon.js";
export interface Pill extends IAttr {
    icon?: string | Icon | icon;
    iconPosition?: "start" | "end" | "top" | "bottom";
    color?: bootstrapType.color;
    weight?: "md" | "lg";
    type?: 1 | 2;
}
export declare class pill extends small {
    constructor();
    constructor(text: string);
    constructor(attr: Pill);
    constructor(attr: Pill, text: string);
}
export declare const Pill: (AttrOrText?: Pill | string, Text?: string) => pill;
