import { IElem } from "../../../core/tag.js";
import { container as IContainer } from "./content/container.js";
import { containerNav } from "./header/containerNav.js";

export interface item {
	label?: IElem;
	elem?: IElem;
	active?: boolean;
	disabled?: boolean;
}

export interface container extends Omit<containerNav, "item" | "container"> {
	card?: true;
	animation?: boolean;
	item?: item | item[];
	attrContent?: IContainer;
}
