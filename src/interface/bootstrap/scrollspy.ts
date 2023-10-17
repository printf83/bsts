import { IAttr } from "../../core/tag.js";

export interface scrollspy extends IAttr {
	target?: string;
	smooth?: boolean;
	rootMargin?: string;
	initDelay?: number;
}
