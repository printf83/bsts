import { bsConstructor } from "../core/bootstrap.js";
import { elem } from "../interface/core/elem.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { i } from "../html/i.js";
import { icon as Icon } from "../interface/bootstrap/icon.js";

const bubbleEvent = (event: Event) => {
	event.preventDefault();
	event.stopPropagation();

	const target = event.target as Element;
	const a = target.closest("a");
	if (a) {
		a.click();
	} else {
		const button = target.closest("button");
		if (button) {
			button.click();
		}
	}
};

const genStaticIcon = (t: Icon["type"], i: string, a?: Icon) => {
	if (a) {
		delete a.type;
		delete a.id;
		return new icon(mergeObject({ type: t, id: i }, a));
	} else {
		return new icon({ type: t, id: i });
	}
};

export class icon extends i {
	constructor();
	constructor(attr: Icon);
	constructor(elem: elem | elem[]);
	constructor(attr: Icon, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: Icon) {
		if (!attr.id && attr.elem && typeof attr.elem === "string") {
			attr.id = attr.elem;
			attr.elem = undefined;
		}

		if (!attr.type && attr.id && attr.id.indexOf(" ") > -1) {
			let sid = attr.id.split(" ");
			if (sid.length === 2) {
				switch (sid[0]) {
					case "bi":
						attr.type = sid[0];
						attr.id = sid[1];
						break;
					default:
						console.error("unsupported icon type", attr.id);
				}
			}
		}

		attr.type ??= "bi";

		if (attr.type === "bi") {
			attr = mergeObject(
				{
					class: ["bi", attr.id ? `bi-${attr.id}` : undefined],
				},
				attr
			);
		}

		if (attr.handleBubble) {
			attr = mergeObject({ on: { click: bubbleEvent } }, attr);
		}

		delete attr.id;
		delete attr.type;
		delete attr.handleBubble;
		return super.convert(attr);
	}

	static bi = (i: string, attr?: Icon) => genStaticIcon("bi", i, attr);
}
