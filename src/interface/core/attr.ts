import { aria } from "./aria.js";
import { bsAttr } from "./bsAttr.js";
import { bsClass } from "./bsClass.js";
import { bsts } from "./bsts.js";
import { data } from "./data.js";
import { style } from "./style.js";
import { global } from "./global.js";
import { event } from "./event.js";
import { elem } from "./elem.js";

export interface attr extends global, bsts, bsAttr, bsClass {
	data?: data;
	aria?: aria;
	on?: event;
	style?: style;
	elem?: elem;
}
