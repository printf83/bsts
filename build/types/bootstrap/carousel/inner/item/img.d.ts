import { img as TImg, Img as IImg } from "../../../img.js";
export declare class img extends TImg {
    constructor();
    constructor(src: string);
    constructor(attr: IImg);
    constructor(attr: IImg, src: string);
}
export declare const Img: (AttrOrSrc?: IImg | string, Src?: string) => img;
