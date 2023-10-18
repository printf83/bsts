import { a as HA } from "../../html/a.js";

export interface item extends HA {
	active?: boolean;
	href?: string;
}
