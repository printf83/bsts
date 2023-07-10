import { IAttr } from "../tag.js";
export type IAttachFn = (key: string, elem: Element, attr: IAttr) => {
    elem: Element;
    attr: IAttr;
    changed: boolean;
};
export declare const attachAttr: (elem: Element, attr: IAttr) => Element;
