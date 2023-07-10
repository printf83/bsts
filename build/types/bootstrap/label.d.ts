import { bootstrapType } from "../core/bootstrap.js";
import { Label as ILabel, label as TLabel } from "../html/label.js";
import { Icon, icon } from "./icon.js";
import { Button } from "./button.js";
export type LabelDisplay = bootstrapType.display | bootstrapType.display[];
export interface Label extends ILabel, Omit<Button, "role"> {
    icon?: string | Icon | icon;
    iconPosition?: "start" | "end" | "top" | "bottom";
    iconDisplay?: LabelDisplay;
    labelDisplay?: LabelDisplay;
    stretched?: boolean;
}
export declare class label extends TLabel {
    constructor();
    constructor(text: string);
    constructor(attr: Label);
    constructor(attr: Label, text: string);
}
export declare const Label: (AttrOrText?: Label | string, Text?: string) => label;
