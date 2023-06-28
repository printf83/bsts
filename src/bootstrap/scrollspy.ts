import { IAttr, IElem, genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";
import { addEvent } from "../core/eventManager.js";
import { bstsConsole as console } from "../core/console.js";
import { UUID } from "../core/uuid.js";

export interface Scrollspy extends IAttr {
	target?: string;
	smooth?: boolean;
	rootMargin?: string;
	initDelay?: number;
}
const convert = (attr: Scrollspy) => {
	attr.initDelay ??= 1000;
	attr.id ??= UUID();

	const initDelay = attr.initDelay;

	attr = mergeObject(
		{
			data: {
				// "bs-spy": "scroll", //manually init the scrollspy by bsts
				"bs-target": attr.target,
				"bs-smooth-scroll": attr.smooth ? "true" : undefined,
				"bs-root-margin": attr.rootMargin,
			},
			on: {
				build: (e) => {
					const target = e.target as Element;
					const id = target.id;

					if (initDelay) {
						setTimeout(
							(id: string) => {
								const target = document.getElementById(id);
								if (target) {
									scrollspy.init(target as Element);
								}
							},
							initDelay,
							id
						);
					} else {
						scrollspy.init(document.getElementById(id) as Element);
					}
				},
			},
			tabindex: attr.tabindex || "0",
		},
		attr
	);

	delete attr.initDelay;
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
				const target = i.target as Element;
				console.info(`Dispose bootstrap scrollspy from $1`, target);

				const m = window.bootstrap.ScrollSpy.getInstance(target);
				if (m) {
					m.dispose();
				}
			});

			console.info(`Initialize bootstrap scrollspy to $1`, elem);
			return new window.bootstrap.ScrollSpy(elem, option);
		}

		return null;
	};
}

export const Scrollspy = (AttrOrElem?: Scrollspy | IElem, Elem?: IElem) =>
	genTagClass<scrollspy, Scrollspy>(scrollspy, AttrOrElem, Elem);
