import { bootstrapType } from "../core/base/bootstrap.js";
import { IAttr, IElem, tag } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";

type IAttrIconType = "fab" | "fas" | "far" | "fad" | "fal";

export interface IAttrBSIcon extends IAttr {
	icon?: string;
	type?: IAttrIconType;
	color?: bootstrapType.color[number];
	weight?: "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";
	fixwidth?: boolean;
	spin?: boolean;
	beat?: boolean;
	fade?: boolean;
	bounce?: boolean;
	flip?: boolean;
	shake?: boolean;
	rotate?: 90 | 180 | 270 | "horizontal" | "vertical" | "both";
	inverse?: boolean;
	stack?: true | 1 | 2;
}

const convert = (a: IAttrBSIcon): IAttrBSIcon => {
	a = mergeObject(a, {
		class: [
			a.type ? a.type : a.icon ? "fas" : "",
			a.icon ? `fa-${a.icon}` : "",
			a.weight ? `fa-${a.weight}` : "",
			a.fixwidth ? "fa-fw" : "",
			a.spin ? "fa-spin" : "",
			a.bounce ? "fa-bounce" : "",
			a.flip ? "fa-flip" : "",
			a.shake ? "fa-shake" : "",
			a.inverse ? "fa-inverse" : "",
			!a.beat && a.fade ? "fa-fade" : "",
			a.beat && !a.fade ? "fa-beat" : "",
			a.beat && a.fade ? "fa-beat-fade" : "",
			a.rotate
				? typeof a.rotate === "number"
					? `fa-rotate-${a.rotate.toString()}`
					: `fa-flip-${a.rotate.toString()}`
				: "",
			a.stack ? (typeof a.stack === "number" ? `fa-stack-${a.stack.toString()}x` : "fa-stack") : "",
		],
		textColor: a.color,
	});

	delete a.icon;
	delete a.type;
	delete a.color;
	delete a.weight;
	delete a.fixwidth;
	delete a.fade;
	delete a.bounce;
	delete a.flip;
	delete a.spin;
	delete a.shake;
	delete a.rotate;
	delete a.inverse;
	delete a.stack;

	return a;
};

export class icon extends tag {
	constructor(); //#1
	constructor(icon: string); //#2
	constructor(attr: IAttrBSIcon); //#3
	constructor(type: string, icon: string); //#4
	constructor(attr: IAttrBSIcon, elem: IElem); //#5
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("i");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				//#2
				super("i", convert({ icon: arg[0] }), []);
			} else {
				//#3
				super(arg[0].stack === true ? "span" : "i", convert(arg[0]), []);
			}
		} else if (arg.length === 2) {
			if (typeof arg[0] === "string") {
				//#4
				super("i", convert({ type: arg[0] as IAttrIconType, icon: arg[1] }), []);
			} else {
				//#5
				super(arg[0].stack === true ? "span" : "i", convert(arg[0]), arg[1]);
			}
		}
	}
}
