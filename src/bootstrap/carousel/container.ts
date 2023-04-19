import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/mergeObject.js";
import * as indicators from "./indicators/_index.js";
import { UUID } from "../../core/uuid.js";
import * as inner from "./inner/_index.js";

export interface IBsCarouselItem {
	interval?: number;
	src?: string;
	caption?: IElem;
}
export interface IBsCarousel extends IAttr {
	fade?: boolean;
	autoPlay?: boolean;
	disableTouch?: boolean;
	innerAttr?: IAttr;
	item?: IBsCarouselItem[];
	itemControl?: boolean;
	itemIndicator?: boolean;
}

const convert = (attr: IBsCarousel) => {
	attr.autoPlay = attr.autoPlay !== false ? true : false;

	attr = mergeObject(
		{
			class: ["carousel", "slide", attr.fade ? "carousel-fade" : undefined],
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
				attr.innerAttr ? attr.innerAttr : {},
				attr.item.map((i, ix) => {
					return new inner.item.container(
						{
							interval: i.interval,
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
	delete attr.innerAttr;

	delete attr.item;
	delete attr.itemControl;
	delete attr.itemIndicator;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IBsCarousel); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsCarousel, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsCarousel>("elem", convert, arg));
	}
}
