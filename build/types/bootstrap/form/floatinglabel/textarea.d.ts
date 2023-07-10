import { IAttr, IElem } from "../../../core/tag.js";
import { div } from "../../../html/div.js";
import { Textarea as ITextarea } from "../../textarea.js";
export interface Textarea extends Omit<ITextarea, "container"> {
    description?: string;
    container?: IAttr;
    before?: IElem;
    after?: IElem;
    invalidFeedback?: string;
    validFeedback?: string;
    invalidTooltip?: string;
    validTooltip?: string;
}
export declare const Textarea: (attr: Textarea) => div;
