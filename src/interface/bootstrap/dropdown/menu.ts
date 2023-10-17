import { IAttr } from "../../../core/tag.js";
import { bootstrapType } from "../../../core/bootstrap.js";

export interface menu extends IAttr {
	viewOffset?: string | number[];
	reference?: "toggle" | "parent";
	autoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";

	boundary?: string;
	positioning?: "dynamic" | "static";
	popperConfig?: object;

	positionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];
	dropdownMenuPositionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];

	customStyle?: 1;

	debug?: boolean;
}
