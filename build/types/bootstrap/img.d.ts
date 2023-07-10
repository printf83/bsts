import { Img as IImg, img as TImg } from "../html/img.js";
export interface Img extends IImg {
    fluid?: true;
    thumbnail?: true;
}
export declare class img extends TImg {
    constructor();
    constructor(src: string);
    constructor(attr: Img);
    constructor(attr: Img, src: string);
}
export declare const Img: (AttrOrSrc?: Img | string, Src?: string) => img;
