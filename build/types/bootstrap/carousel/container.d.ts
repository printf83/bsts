import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface CarouselItem {
    interval?: number;
    src?: string;
    caption?: IElem;
}
export interface Carousel extends IAttr {
    fade?: boolean;
    ride?: boolean | "carousel";
    touch?: boolean;
    interval?: number;
    keyboard?: boolean;
    pause?: boolean | "hover";
    wrap?: boolean;
    innerAttr?: IAttr;
    item?: CarouselItem[];
    itemControl?: boolean;
    itemIndicator?: boolean;
}
export declare class container extends div {
    constructor();
    constructor(attr: Carousel);
    constructor(elem: IElem);
    constructor(attr: Carousel, elem: IElem);
}
export declare const Container: (AttrOrElem?: Carousel | IElem, Elem?: IElem) => container;
