import { bsType } from "../../core/bsType.js";
import { a as HA } from "../../html/a.js";

export interface buttonLink extends HA {
	viewOffset?: string | number[];
	reference?: "toggle" | "parent";
	autoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";

	boundary?: string;
	positioning?: "dynamic" | "static";
	popperConfig?: object;

	split?: boolean;
	navItem?: boolean;
	color?: bsType.linkColor;
}
