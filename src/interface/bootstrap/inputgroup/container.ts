import { attr } from "../../core/attr.js";

export interface container extends attr {
	weight?: "sm" | "lg";
	noWarp?: true;
}
