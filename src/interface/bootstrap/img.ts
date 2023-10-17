import { img as IImg } from "../html/img.js";

export interface Img extends IImg {
	fluid?: true;
	thumbnail?: true;
}
