import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr } from "../../core/tag.js";
import { Icon } from "./icon.js";
import { icon } from "../../bootstrap/icon.js";

export type MsgDisplay = bootstrapType.display | bootstrapType.display[];

export interface Msg extends IAttr {
	icon?: string | Icon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: MsgDisplay;
	labelDisplay?: MsgDisplay;
}
