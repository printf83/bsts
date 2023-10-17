import { input as IInput } from "../input.js";
import { label } from "../label.js";

export interface toggle extends Omit<IInput, "container"> {
	type?: "checkbox" | "radio";
	container?: label;
}
