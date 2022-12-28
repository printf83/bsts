import { bs } from "./bs/var.js";
export interface IBase {
    tag: string;
    elem: IBase[];
    class: string | string[];
    padding: bs.padding;
}
export interface IAttachResult {
    elem: HTMLElement;
    opt: IBase;
}
