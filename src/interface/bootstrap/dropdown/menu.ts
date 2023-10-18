import { attr } from "../../core/attr.js";
import { bsType } from "../../core/bsType.js";

export interface menu extends attr {
	viewOffset?: string | number[];
	reference?: "toggle" | "parent";
	autoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";

	boundary?: string;
	positioning?: "dynamic" | "static";
	popperConfig?: object;

	positionView?: bsType.dropdownMenuPositionView | bsType.dropdownMenuPositionView[];
	dropdownMenuPositionView?: bsType.dropdownMenuPositionView | bsType.dropdownMenuPositionView[];

	customStyle?: 1;

	debug?: boolean;
}
