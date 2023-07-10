import { IAttr, IElem } from "../../../core/tag.js";
import { div } from "../../../html/div.js";
import { Select as ISelect } from "../../select.js";
export interface Select extends Omit<ISelect, "container"> {
    description?: string;
    container?: IAttr;
    before?: IElem;
    after?: IElem;
    invalidFeedback?: string;
    validFeedback?: string;
    invalidTooltip?: string;
    validTooltip?: string;
}
export declare const Select: (attr: Select) => div;
