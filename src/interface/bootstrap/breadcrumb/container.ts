import { IAttr } from "../../../core/tag.js";
import { item } from "./item.js";

export interface container extends IAttr {
	divider?: string;
	item?: item | item[];
}
