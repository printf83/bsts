import { IAttr } from "../../core/tag.js";
import { div } from "../../html/div.js";
import { Input } from "../input.js";
export interface Check extends Omit<Input, "container"> {
    type?: "checkbox" | "radio";
    container?: IAttr;
    hideLabel?: true;
    inline?: true;
    reverse?: true;
    description?: string;
    invalidFeedback?: string;
    validFeedback?: string;
    invalidTooltip?: string;
    validTooltip?: string;
}
export declare const Check: (attr: Check) => div;
