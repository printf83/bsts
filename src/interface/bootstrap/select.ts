import { select as HSelect } from "../html/select.js";

export interface select extends HSelect {
	weight?: "sm" | "lg";
	isvalid?: boolean;
}
