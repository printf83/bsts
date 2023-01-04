import { bs } from "./attachBootstrap.js";

export interface baseAttr{
    id?: string,
    name?: string,
    class?: string | string[],
    
    padding?: bs.padding[number],
    bgColor?: bs.bgColor[number],
    "bg-Color"?: bs.bgColor[number],
    textColor?: bs.textColor[number],
    "text-Color"?: bs.textColor[number],
}

export interface baseTag{
    tag: string,
    elem?: string,
    attr?: baseAttr,
    dom?:HTMLElement,
}

export interface IBase{
    tag: string,
    elem?: tag | string | (tag | string)[],
    dom?: HTMLElement,

    id?: string,
    name?: string,
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

export class tag{
    public istag = true;
    constructor(public data: IBase) {
    }
}

export const isTag = (obj: any): boolean => {
    return typeof obj === "object" && ("istag" in obj && obj.istag === true);
}

export type attachFn = (key: string, elem: HTMLElement, opt: IBase) => {
    elem: HTMLElement,
    opt: IBase,
};


