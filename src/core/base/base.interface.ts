import { bs } from "./attachBootstrap.js";


export interface IBase{
    tag: string,
    elem: IBase | string | null | (IBase | string | null)[],
    dom?: HTMLElement,

    id?: string,
    name?:string,
    class?: string | string[],
    
    padding?: bs.padding[number],
    bgColor?: bs.bgColor[number],
    "bg-Color"?: bs.bgColor[number],
    textColor?: bs.textColor[number],
    "text-Color"?: bs.textColor[number],
}

export const isIBase = (obj: any): boolean => {
    return typeof obj === "object" && ("tag" in obj && "elem" in obj);
}

export interface IAttachResult {
    elem: HTMLElement,
    opt:IBase
}

let a: IBase = {
    tag: "a",
    elem: "aaa",
    bgColor:"primary"
}

