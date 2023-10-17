import { bootstrapType } from "../../../core/bootstrap.js";
import { ul as HUl } from "../../html/ul.js";

export interface container extends HUl {
	flush?: boolean;
	numbered?: boolean;
	horizontal?: boolean | bootstrapType.viewport;
}
