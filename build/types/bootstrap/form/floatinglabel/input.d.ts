import { IAttr, IElem } from "../../../core/tag.js";
import { Datalist } from "../../../html/datalist.js";
import { div } from "../../../html/div.js";
import { Input as IInput } from "../../input.js";
export interface Input extends Omit<IInput, "container"> {
    type?: "button" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    description?: string;
    datalist?: Datalist["item"];
    container?: IAttr;
    before?: IElem;
    after?: IElem;
    invalidFeedback?: string;
    validFeedback?: string;
    invalidTooltip?: string;
    validTooltip?: string;
}
export declare const Input: (attr: Input) => div;
