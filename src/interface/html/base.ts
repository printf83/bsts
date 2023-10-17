import { IAttr } from "../../core/tag.js";

export interface base extends IAttr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}
