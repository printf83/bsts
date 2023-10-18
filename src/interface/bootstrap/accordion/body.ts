import { container } from "../collapse/container.js";

export interface body extends container {
	labelledby?: string;
	parent?: string;
	show?: boolean;
}
