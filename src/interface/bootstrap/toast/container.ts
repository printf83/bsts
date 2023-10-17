import { IAttr } from "../../../core/tag.js";

export const containerPlacementA = [
	"top-start",
	"top-center",
	"top-end",
	"middle-start",
	"middle-center",
	"middle-end",
	"bottom-start",
	"bottom-center",
	"bottom-end",
];

export type containerPlacement =
	| "top-start"
	| "top-center"
	| "top-end"
	| "middle-start"
	| "middle-center"
	| "middle-end"
	| "bottom-start"
	| "bottom-center"
	| "bottom-end";

export interface container extends IAttr {
	debug?: boolean;
	placement?: containerPlacement;
}
