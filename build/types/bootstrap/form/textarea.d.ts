import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
import { Textarea as ITextarea } from "../textarea.js";
export interface Textarea extends Omit<ITextarea, "container"> {
    description?: string;
    container?: IAttr;
    hideLabel?: true;
    before?: IElem;
    after?: IElem;
    col1?: bootstrapType.col;
    col2?: bootstrapType.col;
    col3?: false | bootstrapType.col;
    invalidFeedback?: string;
    validFeedback?: string;
    invalidTooltip?: string;
    validTooltip?: string;
}
export declare const Textarea: (attr: Textarea) => div;
