import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { indicators } from "./indicators/_index.js";
import { UUID } from "../../core/fn/uuid.js";
import { inner } from "./inner/_index.js";

export interface IAttrBSCarouselItem {
	src?: string;
	caption?: IElem;
}
export interface IAttrBSCarousel extends IAttr {
	fade?: boolean;
	autoPlay?: boolean;
	disableTouch?: boolean;

	item?: IAttrBSCarouselItem[];
	itemControl?: boolean;
	itemIndicator?: boolean;
}

const convert = (attr: IAttrBSCarousel) => {
	attr.autoPlay = attr.autoPlay !== false ? true : false;

	attr = mergeObject(
		{
			class: ["carousel", "slide"],
			data: {
				"bs-ride": attr.autoPlay === true ? "carousel" : "true",
				"bs-touch": attr.disableTouch ? "false" : undefined,
			},
		},
		attr
	);

	if (attr.item && !attr.elem) {
		attr.id ??= UUID();
		attr.elem = [];

		//indicators
		if (attr.itemIndicator) {
			attr.elem.push(
				new indicators.container(
					attr.item.map((_i, ix) => {
						return new indicators.button({
							target: `#${attr.id}`,
							slide: ix,
							active: ix === 0 ? true : undefined,
						});
					})
				)
			);
		}

		//item
		attr.elem.push(
			new inner.container(
				attr.item.map((i, ix) => {
					return new inner.item.container(
						{
							active: ix === 0 ? true : undefined,
						},
						[
							new inner.item.img({
								src: i.src,
							}),
							i.caption ? new inner.item.caption(i.caption) : "",
						]
					);
				})
			)
		);

		//control
		if (attr.itemControl) {
			attr.elem.push(
				new inner.control.prev({
					target: `#${attr.id}`,
				})
			);

			attr.elem.push(
				new inner.control.next({
					target: `#${attr.id}`,
				})
			);
		}
	}

	delete attr.fade;
	delete attr.autoPlay;
	delete attr.disableTouch;

	delete attr.item;
	delete attr.itemControl;
	delete attr.itemIndicator;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSCarousel); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCarousel, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSCarousel>("elem", convert, arg));
	}
}
