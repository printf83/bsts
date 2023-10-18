import { attr } from "../core/attr.js";

export interface scrollspy extends attr {
	target?: string;
	smooth?: boolean;
	rootMargin?: string;
	initDelay?: number;
}
