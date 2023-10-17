import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr } from "../../core/tag.js";

import { Icon } from "./icon.js";
import { icon } from "../../bootstrap/icon.js";

export interface Pill extends IAttr {
	icon?: string | Icon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	color?: bootstrapType.color;
	weight?: "md" | "lg";
	type?: 1 | 2;
}
