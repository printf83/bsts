import { btngroup as IBtngroup } from "../btngroup.js";

export type drop = "down" | "down-center" | "up" | "up-center" | "start" | "end";
export interface container extends IBtngroup {
	drop?: drop;
}
