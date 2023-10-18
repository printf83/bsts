import { bsType } from "../core/bsType.js";
import { attr } from "../core/attr.js";
import { icon as IIcon } from "./icon.js";
import { icon as BIcon } from "../../bootstrap/icon.js";

export type msgDisplay = bsType.display | bsType.display[];

export interface msg extends attr {
	icon?: string | IIcon | BIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: msgDisplay;
	labelDisplay?: msgDisplay;
}
