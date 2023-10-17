import { bootstrapType } from "../../../core/bootstrap.js";
import { IAttr } from "../../../core/tag.js";

export interface container extends IAttr {
	placement?: "start" | "end" | "top" | "bottom";
	show?: boolean | bootstrapType.viewport;
	dark?: boolean;
	backdrop?: boolean | "static";
	scroll?: boolean;
	labelledby?: string;

	debug?: boolean;
}
