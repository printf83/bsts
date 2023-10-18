import { attr } from "../core/attr.js";
import { icon as IIcon } from "./icon.js";
import { icon as BIcon } from "../../bootstrap/icon.js";
import { bsType } from "../core/bsType.js";

export type captionDisplay = bsType.display | bsType.display[];

export interface caption extends attr {
	icon?: string | IIcon | BIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: captionDisplay;
	labelDisplay?: captionDisplay;
}
