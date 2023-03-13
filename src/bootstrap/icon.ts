import { bootstrapType, bsConstArg } from "../core/base/bootstrap.js";
import { IAttr, IElem } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { i } from "../html/i.js";
import { span } from "../html/span.js";

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

const convert = (attr: IAttrBSIcon) => {
	attr = mergeObject(
		{
			class: [
				attr.type ? attr.type : attr.icon ? "fas" : undefined,
				attr.icon ? `fa-${attr.icon}` : undefined,
				attr.weight ? `fa-${attr.weight}` : undefined,
				attr.fixwidth !== false ? "fa-fw" : undefined,
				attr.spin ? "fa-spin" : undefined,
				attr.bounce ? "fa-bounce" : undefined,
				attr.flip ? "fa-flip" : undefined,
				attr.shake ? "fa-shake" : undefined,
				attr.inverse ? "fa-inverse" : undefined,
				!attr.beat && attr.fade ? "fa-fade" : undefined,
				attr.beat && !attr.fade ? "fa-beat" : undefined,
				attr.beat && attr.fade ? "fa-beat-fade" : undefined,
				attr.rotate
					? typeof attr.rotate === "number"
						? `fa-rotate-${attr.rotate.toString()}`
						: `fa-flip-${attr.rotate.toString()}`
					: undefined,
				attr.stack
					? typeof attr.stack === "number"
						? `fa-stack-${attr.stack.toString()}x`
						: "fa-stack"
					: undefined,
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
	constructor();
	constructor(attr: IAttrBSIcon);
	constructor(elem: IElem);
	constructor(attr: IAttrBSIcon, elem: IElem);
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
