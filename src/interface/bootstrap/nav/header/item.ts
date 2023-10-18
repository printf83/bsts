import { li as HLi } from "../../../html/li.js";
import { button } from "./button.js";
import { link } from "./link.js";

export interface item extends HLi {
	role?: "presentation";
	dropdown?: boolean;

	link?: link;
	button?: button;
}
