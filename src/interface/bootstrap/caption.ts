import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr } from "../../core/tag.js";
import { Icon } from "./icon.js";
import { icon } from "../../bootstrap/icon.js";

export type CaptionDisplay = bootstrapType.display | bootstrapType.display[];

export interface Caption extends IAttr {
	icon?: string | Icon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: CaptionDisplay;
	labelDisplay?: CaptionDisplay;
}
