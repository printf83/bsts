import { attr } from "../../../core/attr.js";
import { item } from "./item.js";

export interface container extends attr {
	item?: item | item[];
}
