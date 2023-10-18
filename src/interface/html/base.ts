import { attr } from "../core/attr.js";

export interface base extends attr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}
