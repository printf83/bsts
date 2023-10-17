import { button as IButton } from "../button.js";

export interface button extends IButton {
	viewOffset?: string | number[];
	reference?: "toggle" | "parent";
	autoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";

	boundary?: string;
	positioning?: "dynamic" | "static";
	popperConfig?: object;

	split?: boolean;
	navItem?: boolean;
}
