import { elem } from "../../core/elem.js";
import { container as IContainer } from "./content/container.js";
import { containerNav } from "./header/containerNav.js";

export interface item {
	label?: elem | elem[];
	elem?: elem | elem[];
	active?: boolean;
	disabled?: boolean;
}

export interface container extends Omit<containerNav, "item" | "container"> {
	card?: true;
	animation?: boolean;
	item?: item | item[];
	attrContent?: IContainer;
}
