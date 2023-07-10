import { IAttr } from "../core/tag.js";
import { span } from "../html/span.js";
export declare const initTimer: (elem: Element, callback?: Function) => void;
export interface Timer extends IAttr {
    time?: number;
    callback?: Function;
}
export declare class timer extends span {
    constructor();
    constructor(attr: Timer);
    constructor(time: number);
    constructor(attr: Timer, time: number);
}
export declare const Timer: (AttrOrTime?: Timer | number, Elem?: number) => timer;
