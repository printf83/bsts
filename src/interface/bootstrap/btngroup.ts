import { IAttr } from "../../core/tag.js";

export interface btngroup extends Omit<IAttr, "role"> {
	role?: "group" | "toolbar";
	weight?: "sm" | "lg";
	vertical?: boolean;
}
