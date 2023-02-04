import { genBootstrapClass } from "../core/attach/attachBootstrap.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, bootstrapType } from "../core/base/bootstrap.js";
import { IElem } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../ht/div.js";
import { IAttrTagLabel, label as TLabel } from "../ht/label.js";
import { span } from "../ht/span.js";
import { IAttrBSIcon, icon } from "./icon.js";

type IBootstrapTypeDisplay = bootstrapType.display[number] | bootstrapType.display[number][];

export interface IAttrBSLabel extends IAttrTagLabel {
	icon?: IAttrBSIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: IBootstrapTypeDisplay;
	labelDisplay?: IBootstrapTypeDisplay;

	color?: bootstrapType.color[number];
	outline?: boolean;
}

const rules: bootstrapRuleDB = {
	btnColor: new bootstrapAttachRule({
		format: "btn btn-$1",
		value: bootstrapBase.btnColor.concat(),
	}),
	btnOutlineColor: new bootstrapAttachRule({
		format: "btn btn-outline-$1",
		value: bootstrapBase.btnOutlineColor.concat(),
	}),
};

const fnRow = (display: IBootstrapTypeDisplay | undefined, elem: IElem) => {
	return new div({ row: true, display: display }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (display: IBootstrapTypeDisplay | undefined, attr: IAttrBSIcon) => {
	return new span({ display: display }, new icon(attr!));
};

const fnElem = (display: IBootstrapTypeDisplay | undefined, elem: IElem) => {
	return new span({ display: display }, elem);
};

const convert = (attr: IAttrBSLabel) => {
	let tElem: IElem;
	let tAttr: IAttrBSLabel = attr;

	if (attr && typeof attr.icon !== "undefined") {
		if (attr.elem) {
			//default position
			attr.iconPosition = attr.iconPosition || "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					tElem = new div({ display: "flex", gap: 2, alignItem: "center" }, [fnIcon(attr.iconDisplay, attr.icon), fnElem(attr.labelDisplay, attr.elem)]);
					break;
				case "end":
					tElem = new div({ display: "flex", gap: 2, alignItem: "center" }, [fnElem(attr.labelDisplay, attr.elem), fnIcon(attr.iconDisplay, attr.icon)]);
					break;
				case "top":
					tElem = new div({ display: "inline-block" }, [fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)), fnRow(attr.labelDisplay, fnElem(undefined, attr.elem))]);
					break;
				case "bottom":
					tElem = new div({ display: "inline-block" }, [fnRow(attr.labelDisplay, fnElem(undefined, attr.elem)), fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon))]);
					break;
				default:
					throw new Error("Unknow iconPosition");
			}
		} else {
			tElem = new icon(attr.icon);
		}
	} else {
		if (attr.elem) {
			tElem = attr.elem;
		} else {
			tElem = "Label";
		}
	}

	//check label toggle
	//color & outline
	if (attr.color) {
		if (attr.outline === true) {
			attr.class = mergeClass(genBootstrapClass("btnOutlineColor", rules.btnOutlineColor, attr.color), attr.class);
		} else {
			attr.class = mergeClass(genBootstrapClass("btnColor", rules.btnColor, attr.color), attr.class);
		}
	}

	delete tAttr.icon;
	delete tAttr.iconPosition;
	delete tAttr.iconDisplay;
	delete tAttr.labelDisplay;
	delete tAttr.color;
	delete tAttr.outline;

	delete attr.elem;
	attr.elem = tElem;

	return attr;
};

export class label extends TLabel {
	constructor(); //#1
	constructor(text: string); //#2
	constructor(attr: IAttrBSLabel); //#3
	constructor(icon: string, text: string); //#4
	constructor(attr: IAttrBSLabel, text: string); //#5
	constructor(attr: IAttrBSLabel, icon: string, text: string); //#6
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				//#2
				super(convert({ elem: arg[0] }));
			} else {
				//#3
				super(convert(arg[0]));
			}
		} else if (arg.length === 2) {
			if (typeof arg[0] === "string" && typeof arg[1] === "string") {
				//#4
				super(convert({ icon: arg[0] as IAttrBSIcon, elem: arg[1] }));
			} else {
				//#5
				super(
					convert(
						mergeObject<IAttrBSLabel>(
							{
								elem: arg[1],
							},
							arg[0]
						)
					)
				);
			}
		} else if (arg.length === 3) {
			//#6
			super(
				convert(
					mergeObject<IAttrBSLabel>(
						{
							icon: arg[1] as IAttrBSIcon,
							elem: arg[2],
						},
						arg[0]
					)
				)
			);
		}
	}
}
