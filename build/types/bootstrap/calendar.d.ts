import { IAttr } from "../core/tag.js";
import { div } from "../html/div.js";
export interface Calendar extends IAttr {
    multiple?: boolean;
    view?: Date;
    startDate?: Date;
    endDate?: Date;
    dayTitle?: string[];
    monthTitle?: string[];
}
export declare class calendar extends div {
    constructor();
    constructor(attr: Calendar);
}
export declare const Calendar: (Attr?: Calendar) => calendar;
