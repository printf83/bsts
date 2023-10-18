import { attr } from "../core/attr.js";

export interface btngroup extends Omit<attr, "role"> {
	role?: "group" | "toolbar";
	weight?: "sm" | "lg";
	vertical?: boolean;
}
