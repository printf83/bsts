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

export type attachFn = (key: string, elem: HTMLElement, opt: IBase) => {
    elem: HTMLElement,
    opt:IBase,
};


// export class t implements IBase{
    
//     tag = "h1";
//     elem = null;

//     constructor(arg: IBase) {
//         this.tag = arg.tag;
//         this.elem = arg.elem;
//     }

//     convert = ():void => {
        
//     }

// }

// function aaaa(d: t):t {
//     return d;
// }

// aaaa(new t({
//     tag: "test",
//     elem: null,
//     bgColor:"danger"
// }))


