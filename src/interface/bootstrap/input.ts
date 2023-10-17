import { Input as IInput } from "../../html/input.js";

export interface Input extends IInput {
	weight?: "sm" | "lg";
	toggle?: true;
	switch?: true;
	plaintext?: true;
	isvalid?: boolean;
}
