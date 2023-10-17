import { textarea as HTextarea } from "../html/textarea.js";

export interface textarea extends HTextarea {
	weight?: "sm" | "lg";
	isvalid?: boolean;
}
