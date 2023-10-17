import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/mergeObject.js";
import * as indicators from "./indicators/_index.js";
import { UUID } from "../../core/uuid.js";
import * as inner from "./inner/_index.js";
import { init } from "./_fn.js";

export interface CarouselItem extends IAttr {
	interval?: number;
	src?: string;
	caption?: IElem;
}
export interface Carousel extends IAttr {
	fade?: boolean;
	ride?: boolean | "carousel";
	touch?: boolean;

	interval?: number;
	keyboard?: boolean;
	pause?: boolean | "hover";
	wrap?: boolean;

	innerAttr?: IAttr;
	item?: CarouselItem[];
	itemControl?: boolean;
	itemIndicator?: boolean;
}

const convert = (attr: Carousel) => {
	attr.ride ??= attr.itemControl === false ? "carousel" : true;

	attr = mergeObject(
		{
			class: ["carousel", "slide", attr.fade ? "carousel-fade" : undefined],
			data: {
				"bs-interval": attr.interval,
				"bs-keyboard": attr.keyboard,
				"bs-pause": attr.pause,
				"bs-wrap": attr.wrap,
				"bs-ride": attr.ride,
				"bs-touch": attr.touch,
			},
			on: {
				build:
					attr.ride === "carousel"
						? (e) => {
								const target = e.target as Element;
								init(target);
						  }
						: undefined,
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
							textAlign: i.textAlign,
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
	delete attr.ride;
	delete attr.touch;

	delete attr.interval;
	delete attr.keyboard;
	delete attr.pause;
	delete attr.wrap;

	delete attr.innerAttr;
	delete attr.item;
	delete attr.itemControl;
	delete attr.itemIndicator;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: Carousel);
	constructor(elem: IElem);
	constructor(attr: Carousel, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Carousel>("elem", arg)));
	}
}
