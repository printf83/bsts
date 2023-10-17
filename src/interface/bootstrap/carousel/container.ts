import { IAttr, IElem } from "../../../core/tag.js";

export interface carouselItem extends IAttr {
	interval?: number;
	src?: string;
	caption?: IElem;
}
export interface carousel extends IAttr {
	fade?: boolean;
	ride?: boolean | "carousel";
	touch?: boolean;

	interval?: number;
	keyboard?: boolean;
	pause?: boolean | "hover";
	wrap?: boolean;

	innerAttr?: IAttr;
	item?: carouselItem[];
	itemControl?: boolean;
	itemIndicator?: boolean;
}
