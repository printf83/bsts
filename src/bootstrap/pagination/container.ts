import { bsConstructor } from "../../core/bootstrap.js";
import { replaceWith } from "../../core/builder.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { nav } from "../../html/nav.js";
import { ul } from "../../bootstrap/ul.js";
import { container as Container } from "../../interface/bootstrap/pagination/container.js";
import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { icon } from "../icon.js";
import { item } from "./item.js";

function pagingOnChange(attr: Container, sender: Element) {
	let data = sender.getAttribute("data-bs-skip");
	if (data) {
		attr.skip = parseInt(data);

		let container = sender.closest(".pagination") as Element;
		var event = new CustomEvent("change.bs.pagination", {
			detail: {
				total: attr.total,
				skip: attr.skip,
				limit: attr.limit,
				max: attr.maxBtnCount,
			},
		});

		container.dispatchEvent(event);
		replaceWith(container, new ul(genElem(attr)));
	}
}

const genElem = (attr: Container): attr => {
	if (attr.total && !attr.elem) {
		attr.firstLast ??= true;
		attr.nextPrev ??= true;
		attr.skip ??= 0;
		attr.limit ??= 10;
		attr.maxBtnCount ??= 3;

		attr.nextLable ??= new icon({ handleBubble: true, type: "bi", id: "chevron-right" });
		attr.lastLabel ??= new icon({ handleBubble: true, type: "bi", id: "chevron-bar-right" });
		attr.prevLabel ??= new icon({ handleBubble: true, type: "bi", id: "chevron-left" });
		attr.firstLabel ??= new icon({ handleBubble: true, type: "bi", id: "chevron-bar-left" });

		let res: item[] = [];
		let curpage = attr.skip / attr.limit + 1;
		let btncount = Math.floor(attr.total / attr.limit) + (attr.total % attr.limit > 0 ? 1 : 0);

		if (attr.total > attr.limit) {
			//calculate
			var x = 1;
			var y = btncount;
			var c = curpage;
			if (attr.maxBtnCount > btncount) {
				attr.maxBtnCount = btncount;
			}

			if (attr.maxBtnCount < 3) {
				attr.maxBtnCount = 3;
			}

			if (attr.maxBtnCount % 2 === 0) {
				attr.maxBtnCount = attr.maxBtnCount + 1;
			}

			//limit button
			if (y > attr.maxBtnCount) {
				//example for 10

				//x,2,3,4,5
				//1,x,3,4,5
				//1,2,x,4,5

				//2,3,x,5,6
				//3,4,x,6,7
				//4,5,x,7,8
				//5,6,x,8,9
				//6,7,x,9,10

				//6,7,8,x,10
				//6,7,8,9,x
				var md = Math.floor(attr.maxBtnCount / 2) + 1;

				x = c - md + 1;
				y = c + md - 1;

				if (x < 1) {
					x = 1;
					y = attr.maxBtnCount;
				}

				if (y > btncount) {
					y = btncount;
					x = y - attr.maxBtnCount + 1;
				}

				if (x < 1) {
					x = 1;
				}
			}

			//keep data on memory for next repaint
			let tAttr = Object.assign({}, attr);

			//build first button
			if (attr.firstLast) {
				res.push(
					new item({
						disabled: !(curpage > 1),
						label: "First page",
						data: {
							"bs-skip": 0,
						},
						on: {
							click: (event) => {
								let target = event.target as Element;
								pagingOnChange(tAttr, target);
							},
						},
						elem: attr.firstLabel,
					})
				);
			}

			//build prev button
			if (attr.nextPrev) {
				res.push(
					new item({
						disabled: !(curpage > 1),
						label: "Previous Page",
						data: {
							"bs-skip": (curpage - 2) * attr.limit,
						},
						on: {
							click: (event) => {
								let target = event.target as Element;
								pagingOnChange(tAttr, target);
							},
						},
						elem: attr.prevLabel,
					})
				);
			}

			//build middle button
			for (x; x <= y; x++) {
				res.push(
					new item({
						active: x === c,
						label: `Page ${x.toString()}`,
						data: {
							"bs-skip": (x - 1) * attr.limit,
						},
						on: {
							click: (event) => {
								let target = event.target as Element;
								pagingOnChange(tAttr, target);
							},
						},
						elem: x.toString(),
					})
				);
			}

			//build next button
			if (attr.nextPrev) {
				res.push(
					new item({
						disabled: !(curpage < btncount),
						label: "Next Page",
						data: {
							"bs-skip": curpage * attr.limit,
						},
						on: {
							click: (event) => {
								let target = event.target as Element;
								pagingOnChange(tAttr, target);
							},
						},
						elem: attr.nextLable,
					})
				);
			}

			//build last button
			if (attr.firstLast) {
				res.push(
					new item({
						disabled: !(curpage < btncount),
						label: "Last Page",
						data: {
							"bs-skip": (btncount - 1) * attr.limit,
						},
						on: {
							click: (event) => {
								let target = event.target as Element;
								pagingOnChange(tAttr, target);
							},
						},
						elem: attr.lastLabel,
					})
				);
			}

			attr.elem = res;
		}
	}

	delete attr.total;
	delete attr.skip;
	delete attr.limit;
	delete attr.maxBtnCount;
	delete attr.firstLast;
	delete attr.nextPrev;
	delete attr.nextLable;
	delete attr.prevLabel;
	delete attr.firstLabel;
	delete attr.lastLabel;

	return attr as attr;
};

export class container extends nav {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
		//nav only prop is label
		let navAttr: attr = {
			label: attr.label,
		};

		//remove label for ul
		delete attr.label;

		//convert attr for ul
		attr.class = mergeClass(attr.class, ["pagination", attr.weight ? `pagination-${attr.weight}` : undefined]);

		delete attr.weight;

		//add ul to nav
		if (attr.elem) {
			delete attr.total;
			delete attr.skip;
			delete attr.limit;
			delete attr.maxBtnCount;
			delete attr.firstLast;
			delete attr.nextPrev;
			delete attr.nextLable;
			delete attr.prevLabel;
			delete attr.firstLabel;
			delete attr.lastLabel;

			navAttr.elem = new ul(attr as attr);
		} else {
			navAttr.elem = new ul(genElem(attr));
		}

		return super.convert(navAttr);
	}
}
