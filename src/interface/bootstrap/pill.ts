import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr } from "../../core/tag.js";
import { icon as IIcon } from "./icon.js";
import { icon as BIcon } from "../../bootstrap/icon.js";

export interface pill extends IAttr {
	icon?: string | IIcon | BIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	color?: bootstrapType.color;
	weight?: "md" | "lg";
	type?: 1 | 2;
}
