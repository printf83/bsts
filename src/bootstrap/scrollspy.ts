import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { div } from "../html/div.js";
import { addEvent } from "../core/util/eventManager.js";
import { bstsConsole as console } from "../core/util/console.js";
import { UUID } from "../core/util/uuid.js";
import { ScrollSpy as BSScrollSpy } from "bootstrap";
import { scrollspy as Scrollspy } from "../interface/bootstrap/scrollspy.js";
import { elem } from "../interface/core/elem.js";

export class scrollspy extends div {
	constructor();
	constructor(attr: Scrollspy);
	constructor(elem: elem | elem[]);
	constructor(attr: Scrollspy, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Scrollspy>("elem", arg));
	}

	convert(attr: Scrollspy) {
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
		return super.convert(attr);
	}

	static init = (elem: Element | string, options?: Partial<BSScrollSpy.Options>) => {
		return scrollspy.getOrCreateInstance(elem, options);
	};
	static getInstance = (elem: Element | string) => {
		return BSScrollSpy.getInstance(elem);
	};
	static getOrCreateInstance = (elem: Element | string, options?: Partial<BSScrollSpy.Options>) => {
		addEvent("destroy", elem, (i) => {
			const target = i.target as Element;

			// disconnectResizeObserver(target);

			const m = scrollspy.getInstance(target);
			if (m) {
				console.info(`Dispose bootstrap scrollspy from $1`, target);
				m.dispose();
			}
		});

		// observeResizeObserver(elem, (r) => {
		// 	console.log("scrollspy.refresh", r);
		// 	scrollspy.refresh(elem);
		// });

		console.info(`Initialize bootstrap scrollspy to $1`, elem);
		return BSScrollSpy.getOrCreateInstance(elem, options);
	};
	static dispose = (elem: Element | string) => {
		scrollspy.getInstance(elem)?.dispose();
	};
	static refresh = (elem: Element | string) => {
		scrollspy.getInstance(elem)?.refresh();
	};
}
