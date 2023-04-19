import { bootstrapType, bsConstArg } from "../core/bootstrap.js";
import { IAttr, IElem } from "../core/tag.js";
import { mergeObject } from "../core/mergeObject.js";
import { i } from "../html/i.js";
import { span } from "../html/span.js";

type IAttrIconType = "bi" | "brand" | "solid" | "regular" | "duotone" | "light" | "sharp";

export interface IBsIcon extends IAttr {
	id?: string;
	type?: IAttrIconType;
	color?: bootstrapType.textColor;
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

const convert = (attr: IBsIcon) => {
	attr.type ??= "bi";

	if (attr.type === "bi") {
		attr = mergeObject(
			{
				class: ["bi", attr.id ? `bi-${attr.id}` : undefined],
				textColor: attr.color,
			},
			attr
		);
	} else {
		let faType = "regular";
		switch (attr.type) {
			case "brand":
				faType = "fab";
				break;
			case "solid":
				faType = "fas";
				break;
			case "regular":
				faType = "far";
				break;
			case "duotone":
				faType = "fad";
				break;
			case "light":
				faType = "fal";
				break;
			case "sharp":
				faType = "fass";
				break;
		}

		attr = mergeObject(
			{
				class: [
					attr.type && attr.id ? faType : undefined,
					attr.id ? `fa-${attr.id}` : undefined,
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
	}

	delete attr.id;
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

	if (attr.type === "bi") {
		delete attr.type;
		return {
			class: "bi-svg-container",
			elem: new i(attr as IAttr),
			data: { class: attr.class ? (Array.isArray(attr.class) ? attr.class.join(" ") : attr.class) : undefined },
		};
	} else {
		delete attr.type;
		return {
			class: "fa-svg-container",
			elem: new i(attr as IAttr),
			data: { class: attr.class ? (Array.isArray(attr.class) ? attr.class.join(" ") : attr.class) : undefined },
		};
	}
};

const genStaticIcon = (t: IAttrIconType, i: string, a?: IBsIcon) => {
	if (a) {
		delete a.type;
		delete a.id;
		return new icon(mergeObject({ type: t, id: i }, a));
	} else {
		return new icon({ type: t, id: i });
	}
};

export class icon extends span {
	constructor();
	constructor(attr: IBsIcon);
	constructor(elem: IElem);
	constructor(attr: IBsIcon, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}

	static bi = (i: string, attr?: IBsIcon) => genStaticIcon("bi", i, attr);
	static brand = (i: string, attr?: IBsIcon) => genStaticIcon("brand", i, attr);
	static solid = (i: string, attr?: IBsIcon) => genStaticIcon("solid", i, attr);
	static duotone = (i: string, attr?: IBsIcon) => genStaticIcon("duotone", i, attr);
	static light = (i: string, attr?: IBsIcon) => genStaticIcon("light", i, attr);
	static regular = (i: string, attr?: IBsIcon) => genStaticIcon("regular", i, attr);
	static sharp = (i: string, attr?: IBsIcon) => genStaticIcon("sharp", i, attr);
}
