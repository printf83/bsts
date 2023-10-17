import { img as HImg } from "../html/img.js";

export interface img extends HImg {
	fluid?: true;
	thumbnail?: true;
}
