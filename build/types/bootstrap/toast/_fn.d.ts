import { ContainerPlacement } from "./container.js";
import { Item, item } from "./item.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { Toast as BSToast } from "bootstrap";
export declare const init: (elem: string | Element, options?: Partial<BSToast.Options>) => BSToast;
export declare const getInstance: (elem: string | Element) => BSToast | null;
export declare const getOrCreateInstance: (elem: string | Element, options?: Partial<BSToast.Options>) => BSToast;
export declare const hide: (elem: string | Element) => void;
export declare const dispose: (elem: string | Element) => void;
export declare const isShown: (elem: string | Element) => boolean;
export declare const show: (itemOrElem: item | Element | string, placement?: ContainerPlacement) => void;
export interface Create {
    elem: IElem;
    animation?: boolean;
    color?: bootstrapType.textBgColor;
    btnclosewhite?: boolean;
    delay?: number;
    atomic?: boolean;
    live?: Item["live"];
    title?: IElem;
}
export declare const Create: (attr: Create) => item;
