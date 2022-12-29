import { bs } from "./attachBootstrap.js";


export interface IBase{
    tag: string,
    elem: IBase|string|null|(IBase|string|null)[],
    class: string | string[],
    padding: bs.padding,
    dom:HTMLElement,
}

export interface IAttachResult {
    elem: HTMLElement,
    opt:IBase
}

