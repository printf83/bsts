import { IAttr, IElem, genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";
import { addEvent } from "../core/eventManager.js";
import { bstsConsole as console } from "../core/console.js";

export interface Scrollspy extends IAttr {
	target?: string;
	smooth?: boolean;
	rootMargin?: string;
}
const convert = (attr: Scrollspy) => {
	attr = mergeObject(
		{
			data: {
				"bs-spy": "scroll",
				"bs-target": attr.target,
				"bs-smooth-scroll": attr.smooth ? "true" : undefined,
				"bs-root-margin": attr.rootMargin,
			},
			on: {
				build: (e) => {
					const target = e.target as Element;
					scrollspy.init(target);
				},
			},
			tabindex: attr.tabindex || "0",
		},
		attr
	);

	delete attr.target;
	delete attr.smooth;
	delete attr.rootMargin;

	return attr;
};

export class scrollspy extends div {
	constructor();
	constructor(attr: Scrollspy);
	constructor(elem: IElem);
	constructor(attr: Scrollspy, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Scrollspy>("elem", arg)));
	}

	static init = (elem?: Element, option?: Partial<bootstrap.ScrollSpy.Options>) => {
		if (elem) {
			addEvent("destroy", elem, (i) => {
				console.log("Dispose scrollspy", i);

				const m = window.bootstrap.ScrollSpy.getInstance(i.target as Element);
				if (m) {
					m.dispose();
				}
			});

			console.log("Init scrollspy", elem);
			return new window.bootstrap.ScrollSpy(elem, option);
		}

		return null;
	};
}

export const Scrollspy = (AttrOrElem?: Scrollspy | IElem, Elem?: IElem) =>
	genTagClass<scrollspy, Scrollspy>(scrollspy, AttrOrElem, Elem);
