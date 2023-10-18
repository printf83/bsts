import { li as HLi } from "../../html/li.js";

export interface item extends HLi {
	active?: boolean;
	disabled?: boolean;
	href?: string;
}
