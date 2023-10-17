import { IAttr } from "../../core/tag.js";

export interface Scrollspy extends IAttr {
	target?: string;
	smooth?: boolean;
	rootMargin?: string;
	initDelay?: number;
}
