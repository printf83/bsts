import { IAttr } from "../../core/tag.js";

export interface track extends IAttr {
	default?: boolean;
	kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
	label?: string;
	attrLabel?: string;
	src?: string;
	srclang?: string;
}
