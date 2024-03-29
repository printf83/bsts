import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { div } from "../../html/div.js";
import { item as Item } from "../../interface/bootstrap/toast/item.js";

export class item extends div {
	constructor();
	constructor(attr: Item);
	constructor(elem: elem | elem[]);
	constructor(attr: Item, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Item>("elem", arg));
	}

	convert(attr: Item) {
		attr.animation ??= true;

		attr = mergeObject(
			{
				class: ["toast", attr.debug ? "debug" : undefined],
				role: attr.role,
				textBgColor: attr.color,
				border: attr.color ? false : undefined,
				aria: {
					live: attr.live,
					atomic: attr.atomic ? "true" : undefined,
				},
				data: {
					"bs-animation": attr.animation
						? attr.animation === true
							? "true"
							: undefined
						: attr.animation === false
						? "false"
						: undefined,
					"bs-autohide": attr.autohide === false ? "false" : undefined,
					"bs-delay": attr.delay ? attr.delay.toString() : undefined,
				},
			},
			attr
		);

		delete attr.color;
		delete attr.live;
		delete attr.atomic;
		delete attr.autohide;
		delete attr.delay;
		delete attr.animation;
		delete attr.debug;

		return super.convert(attr);
	}
}
