import { Container } from "../collapse/container.js";

export interface Body extends Container {
	labelledby?: string;
	parent?: string;
	show?: boolean;
}
