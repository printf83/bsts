import { bsType } from "../core/bsType.js";
import { attr } from "../core/attr.js";
import { icon as IIcon } from "./icon.js";
import { icon as BIcon } from "../../bootstrap/icon.js";

export interface pill extends attr {
	icon?: string | IIcon | BIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	color?: bsType.color;
	weight?: "md" | "lg";
	type?: 1 | 2;
}
