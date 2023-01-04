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
    elem?: string | tag | (string | tag)[],
    attr?: baseAttr,
}

export class tag implements baseTag{
    constructor(
        public tag: string,
        public elem?: string | tag | (string | tag)[],
        public attr?: baseAttr) {
    }
}

export const isTag = (obj: any): boolean => {
    return typeof obj === "object" && "tag" in obj;
}

export type attachFn = (key: string, elem: HTMLElement, attr: baseAttr) => {
    elem: HTMLElement,
    attr: baseAttr,
};


