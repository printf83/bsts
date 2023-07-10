import { Img as IImg, img as TImg } from "../../bootstrap/img.js";
export interface Img extends IImg {
    location?: "top" | "bottom";
}
export declare class img extends TImg {
    constructor();
    constructor(src: string);
    constructor(attr: Img);
    constructor(attr: Img, src: string);
}
export declare const Img: (AttrOrSrc?: Img | string, Src?: string) => img;
