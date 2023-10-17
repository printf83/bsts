import { input as HInput } from "../html/input.js";

export interface input extends HInput {
	weight?: "sm" | "lg";
	toggle?: true;
	switch?: true;
	plaintext?: true;
	isvalid?: boolean;
}
