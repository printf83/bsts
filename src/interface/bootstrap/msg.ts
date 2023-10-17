import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr } from "../../core/tag.js";
import { icon as IIcon } from "./icon.js";
import { icon as BIcon } from "../../bootstrap/icon.js";

export type msgDisplay = bootstrapType.display | bootstrapType.display[];

export interface msg extends IAttr {
	icon?: string | IIcon | BIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: msgDisplay;
	labelDisplay?: msgDisplay;
}
