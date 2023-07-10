import { bootstrapType } from "../core/bootstrap.js";
import { IAttr } from "../core/tag.js";
import { div } from "../html/div.js";
import { Icon, icon } from "./icon.js";
export type CaptionDisplay = bootstrapType.display | bootstrapType.display[];
export interface Caption extends IAttr {
    icon?: string | Icon | icon;
    iconPosition?: "start" | "end" | "top" | "bottom";
    iconDisplay?: CaptionDisplay;
    labelDisplay?: CaptionDisplay;
}
export declare class caption extends div {
    constructor();
    constructor(text: string);
    constructor(attr: Caption);
    constructor(attr: Caption, text: string);
}
export declare const Caption: (AttrOrText?: Caption | string, Text?: string) => caption;
