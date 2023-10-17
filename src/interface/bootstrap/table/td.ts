import { bootstrapType } from "../../../core/bootstrap.js";
import { td as ITd } from "../../html/td.js";

export interface td extends ITd {
	color?: bootstrapType.color;
	active?: boolean;

	responsiveAttr?: string;
	responsiveTitle?: string;
}
