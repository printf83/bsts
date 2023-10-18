import { attr } from "../../core/attr.js";
import { elem } from "../../core/elem.js";

export interface carouselItem extends attr {
	interval?: number;
	src?: string;
	caption?: elem | elem[];
}
export interface carousel extends attr {
	fade?: boolean;
	ride?: boolean | "carousel";
	touch?: boolean;

	interval?: number;
	keyboard?: boolean;
	pause?: boolean | "hover";
	wrap?: boolean;

	innerAttr?: attr;
	item?: carouselItem[];
	itemControl?: boolean;
	itemIndicator?: boolean;
}
