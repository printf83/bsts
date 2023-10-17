import { IAttr } from "../../core/tag.js";

export interface Popover extends IAttr {
	inline?: boolean;
	trigger?: "hover" | "focus" | "click" | ("hover" | "focus" | "click")[];
	title?: string;
	content?: string;
	placement?: "right" | "left" | "top" | "bottom";
	parent?: string;
	customClass?: string;

	allowHtml?: boolean;
	autoInit?: boolean;
	allowList?: object;
	animation?: boolean;
	boundary?: string;
	showDelay?: string | number;
	hideDelay?: string | number;
	delay?: string | number;
	fallbackPlacement?: "right" | "left" | "top" | "bottom" | ("right" | "left" | "top" | "bottom")[];
	viewOffset?: string | number[];
	popperConfig?: object;
	sanitize?: boolean;
	sanitizeFn?: string;
	selector?: string | false;
	template?: string;
}
