import { bsType } from "../../core/bsType.js";
import { ul as HUl } from "../../html/ul.js";

export interface container extends HUl {
	flush?: boolean;
	numbered?: boolean;
	horizontal?: boolean | bsType.viewport;
}
