import { bootstrapType } from "../../core/bootstrap.js";
import { label as HLabel } from "../html/label.js";
import { icon as IIcon } from "./icon.js";
import { icon as BIcon } from "../../bootstrap/icon.js";
import { button as IButton } from "./button.js";

export type labelDisplay = bootstrapType.display | bootstrapType.display[];

export interface label extends HLabel, Omit<IButton, "role"> {
	icon?: string | IIcon | BIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: labelDisplay;
	labelDisplay?: labelDisplay;
	stretched?: boolean;
}
