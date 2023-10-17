import { button as HButton } from "../../../html/button.js";

export interface button extends HButton {
	active?: boolean;
	slide?: number;
	target?: string;
}
