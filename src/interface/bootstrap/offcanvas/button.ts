import { button as IButton } from "../button.js";

export interface button extends IButton {
	link?: true;
	target?: string;
}
