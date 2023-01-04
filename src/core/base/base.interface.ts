import { bs } from "./attachBootstrap.js";


export interface IBase{
    tag: string,
    elem: IBase | string | null | (IBase | string | null)[],
    dom?: HTMLElement,

    id?: string,
    name?:string,
    class?: string | string[],
    
    padding?: bs.padding,
    bgColor?: bs.bgColor,
    "bg-Color"?: bs.bgColor,
    textColor?: bs.textColor,
    "text-Color"?: bs.textColor,
}

export interface IAttachResult {
    elem: HTMLElement,
    opt:IBase
}

