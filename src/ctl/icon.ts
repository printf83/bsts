import { bootstrapType } from "../core/base/bootstrap.js";
import { IAttr, IElem, isAttr } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { i } from "../tag/i.js";
import { span } from "../tag/span.js";

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

const convert = (attr: IAttrBSIcon): IAttrBSIcon => {
	attr = mergeObject(
		{
			class: [
				attr.type ? attr.type : attr.icon ? "fas" : "",
				attr.icon ? `fa-${attr.icon}` : "",
				attr.weight ? `fa-${attr.weight}` : "",
				attr.fixwidth !== false ? "fa-fw" : "",
				attr.spin ? "fa-spin" : "",
				attr.bounce ? "fa-bounce" : "",
				attr.flip ? "fa-flip" : "",
				attr.shake ? "fa-shake" : "",
				attr.inverse ? "fa-inverse" : "",
				!attr.beat && attr.fade ? "fa-fade" : "",
				attr.beat && !attr.fade ? "fa-beat" : "",
				attr.beat && attr.fade ? "fa-beat-fade" : "",
				attr.rotate
					? typeof attr.rotate === "number"
						? `fa-rotate-${attr.rotate.toString()}`
						: `fa-flip-${attr.rotate.toString()}`
					: "",
				attr.stack ? (typeof attr.stack === "number" ? `fa-stack-${attr.stack.toString()}x` : "fa-stack") : "",
			],
			textColor: attr.color,
		},
		attr
	);

	delete attr.icon;
	delete attr.type;
	delete attr.color;
	delete attr.weight;
	delete attr.fixwidth;
	delete attr.fade;
	delete attr.bounce;
	delete attr.flip;
	delete attr.spin;
	delete attr.shake;
	delete attr.rotate;
	delete attr.inverse;
	delete attr.stack;

	return {
		class: "fa-svg-container",
		elem: new i(attr as IAttr),
		data: { class: attr.class ? (Array.isArray(attr.class) ? attr.class.join(" ") : attr.class) : undefined },
	};
};

export class icon extends span {
	constructor(); //#1
	constructor(icon: string); //#2
	constructor(attr: IAttrBSIcon); //#3
	constructor(elem: IElem); //#4
	constructor(type: string, icon: string); //#5
	constructor(attr: IAttrBSIcon, elem: IElem); //#6
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({ icon: "home" }));
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				//#2
				super(convert({ icon: arg[0] }));
			} else if (isAttr<IAttrBSIcon>(arg[0])) {
				//#3
				super(convert(arg[0]));
			} else {
				//#4
				super(convert({ stack: true, elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			if (typeof arg[0] === "string") {
				//#5
				super(convert({ type: arg[0] as IAttrIconType, icon: arg[1] }));
			} else {
				//#6
				super(convert(mergeObject({ elem: arg[1] }, arg[0])));
			}
		}
	}
}
