import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { IAttrBSInput, input as TInput } from "../input.js";
import { IAttrBSLabel, label } from "../label.js";

export interface IAttrBSFormToggle extends Omit<IAttrBSInput, "container"> {
	type?: "checkbox" | "radio";
	container?: IAttrBSLabel;
}

export const toggle = (attr: IAttrBSFormToggle) => {
	// attr.id ??= UUID();
	// attr.label ??= attr.id;

	// let tAttr = Object.assign({}, attr);
	// tAttr.toggle = true;
	// delete tAttr.container;
	// let tElem = new TInput(tAttr as IAttrBSInput);

	// let tLabel = new label(
	// 	mergeObject(
	// 		{
	// 			for: attr.id,
	// 			elem: [tElem, attr.label],
	// 		},
	// 		attr.container
	// 	)
	// );

	// return tLabel;
	attr.id ??= UUID();
	attr.label ??= attr.id;

	let tLabel = new label(
		mergeObject(
			{
				for: attr.id,
			},
			attr.container
		),
		attr.label
	);

	attr.toggle = true;

	delete attr.container;

	let tElem = new TInput(attr as IAttrBSInput);

	return [tElem, tLabel];
};
