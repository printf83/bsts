import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { div } from "../../html/div.js";
import { bar } from "./bar.js";
import { container as Container } from "../../interface/bootstrap/progress/container.js";

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
		attr.max ??= 100;
		attr.min ??= 0;

		if (attr.min > attr.max) {
			attr.min = attr.max;
		}

		if (attr.max < attr.min) {
			attr.max = attr.min;
		}

		attr.value ??= attr.min;

		attr = mergeObject(
			{
				class: "progress",
				role: attr.role || "progressbar",
				aria: {
					valuenow: attr.value,
					valuemin: attr.min,
					valuemax: attr.max,
				},
			},
			attr
		);

		if (!attr.elem) {
			let showValue = "";
			let percent = `${((attr.value! - attr.min!) / (attr.max! - attr.min!)) * 100}%`;
			switch (attr.text) {
				case "none":
					showValue = "";
					break;
				case "percent":
					showValue = percent;
					break;
				case "progress":
					showValue = `${attr.value}/${attr.max}`;
					break;
				default:
					showValue = attr.text ? attr.text : "";
			}

			attr.elem = new bar(
				{
					textBgColor: attr.color,
					striped: attr.striped,
					animated: attr.animated,
					overflow: attr.text === showValue ? "visible" : undefined,
					style: { width: attr.stacked ? "100%" : percent },
				},
				showValue
			);

			if (attr.stacked) {
				attr.style = { width: percent };
			}
		}

		delete attr.stacked;
		delete attr.color;
		delete attr.striped;
		delete attr.animated;
		delete attr.text;

		delete attr.value;
		delete attr.min;
		delete attr.max;
		return super.convert(attr);
	}
}
