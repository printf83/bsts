import { IAttr } from "../core/tag.js";
import { bsConsNoElemArg } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { replaceWith } from "../core/builder.js";
import { Ul, ul } from "../html/ul.js";
import { li } from "../html/li.js";
import * as modal from "../bootstrap/modal/_index.js";
import * as inputgroup from "../bootstrap/inputgroup/_index.js";
import { button } from "../bootstrap/button.js";
import { icon } from "../bootstrap/icon.js";
import { a } from "../html/a.js";
import { option } from "../html/option.js";
import { select } from "../bootstrap/select.js";
import { input } from "../bootstrap/input.js";
import { mergeObject } from "../core/mergeObject.js";

const copyDate = (d: Date) => {
	return new Date(d.getTime());
};

/* item */
interface Item extends Ul {
	multiple?: boolean;
	view?: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle?: string[];
}

const convertItem = (attr: Item) => {
	attr.multiple ??= false;
	attr.view ??= new Date();

	if (attr.dayTitle && attr.dayTitle.length !== 7) {
		attr.dayTitle = undefined;
	}

	attr.dayTitle ??= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	if (attr.multiple) {
		if (attr.startDate && attr.endDate) {
			if (attr.startDate > attr.endDate) {
				attr.startDate = attr.endDate;
			}

			if (attr.endDate < attr.startDate) {
				attr.endDate = attr.startDate;
			}
		}
	} else if (!attr.multiple) {
		attr.endDate = undefined;
	}

	const multiple = attr.multiple;

	const startDate = attr.startDate ? copyDate(attr.startDate) : undefined;
	const strStartDate = startDate
		? `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
		: undefined;
	const startTime = startDate ? startDate.getTime() : undefined;

	const endDate = attr.endDate ? copyDate(attr.endDate) : undefined;
	const strEndDate = endDate ? `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}` : undefined;
	const endTime = endDate ? endDate.getTime() : undefined;

	const today = new Date();
	const todayYear = today.getFullYear();
	const todayMonth = today.getMonth();
	const todayDate = today.getDate();
	const strToday = `${todayYear}-${todayMonth}-${todayDate}`;

	attr.view.setDate(1);
	const current = copyDate(attr.view);
	const currentYear = current.getFullYear();
	const currentMonth = current.getMonth();
	const currentDayCount = new Date(currentYear, currentMonth + 1, 0).getDate();
	const currentFirstDay = current.getDay();
	const currentLastDay = new Date(currentYear, currentMonth + 1, 0).getDay();

	const next = new Date(currentYear, currentMonth + 1, 1);
	const nextYear = next.getFullYear();
	const nextMonth = next.getMonth();

	const prev = new Date(currentYear, currentMonth - 1, 1);
	const prevYear = prev.getFullYear();
	const prevMonth = prev.getMonth();
	const prevDayCount = new Date(currentYear, currentMonth, 0).getDate();

	//7 - 5(Fri) = 2(Tue)
	const nextViewDayCount = 7 - currentLastDay - 1;

	let days: li[] = [];

	//add days
	for (let w = 0; w < attr.dayTitle.length; w++) {
		days.push(new li({ class: "day" }, `${attr.dayTitle[w]}`));
	}

	//add prev month date
	for (let x = currentFirstDay; x > 0; x--) {
		let f = prevDayCount - x + 1;
		let d = `${prevYear}-${prevMonth}-${f}`;
		let dDate = new Date(prevYear, prevMonth, f).getTime();

		days.push(
			new li(
				{
					class: [
						strStartDate && d === strStartDate ? "selected-start" : undefined,
						strEndDate && d === strEndDate ? "selected-end" : undefined,
						startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
					],
				},
				`${f}`
			)
		);
	}

	//add current month date
	for (let y = 1; y <= currentDayCount; y++) {
		let d = `${currentYear}-${currentMonth}-${y}`;
		let dDate = new Date(currentYear, currentMonth, y).getTime();

		days.push(
			new li(
				{
					class: [
						"current-month",
						d === strToday ? "today" : undefined,
						strStartDate && d === strStartDate ? "selected-start" : undefined,
						strEndDate && d === strEndDate ? "selected-end" : undefined,
						startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
					],
					data: { value: dDate },
					on: {
						click: (e) => {
							const target = e.target as Element;
							const container = target.closest(".calendar-item") as Element;
							const dataValue = target.closest("li")?.getAttribute("data-value");
							if (dataValue) {
								const value = parseInt(dataValue);

								let resStartDate: Date | undefined;
								let resEndDate: Date | undefined;

								if (multiple) {
									if (startDate && endDate) {
										resStartDate = new Date(value);
										resEndDate = undefined;
									} else if (startDate && !endDate) {
										if (startTime! > value) {
											resStartDate = new Date(value);
											resEndDate = new Date(startTime!);
										} else {
											resStartDate = new Date(startTime!);
											resEndDate = new Date(value);
										}
									}
								} else {
									resStartDate = new Date(value);
									resEndDate = undefined;
								}

								container.dispatchEvent(
									new CustomEvent("change.bs.calendar.item", {
										detail: {
											startDate: resStartDate,
											endDate: resEndDate,
										},
									})
								);
							}
						},
					},
				},
				new a({ href: "#" }, `${y}`)
			)
		);
	}

	//add next month date
	for (let z = 1; z <= nextViewDayCount; z++) {
		let d = `${nextYear}-${nextMonth}-${z}`;
		let dDate = new Date(nextYear, nextMonth, z).getTime();

		days.push(
			new li(
				{
					class: [
						strStartDate && d === strStartDate ? "selected-start" : undefined,
						strEndDate && d === strEndDate ? "selected-end" : undefined,
						startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
					],
				},
				`${z}`
			)
		);
	}

	attr.elem = days;

	attr = mergeObject(
		{
			unstyle: true,
			display: "grid",
			gap: 1,
			textAlign: "center",
			class: "calendar-item",
			style: { "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr 1fr" },
		},
		attr
	);

	delete attr.dayTitle;
	delete attr.endDate;
	delete attr.multiple;
	delete attr.startDate;
	delete attr.view;

	return attr;
};

class item extends ul {
	constructor();
	constructor(attr: Item);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convertItem, arg));
	}
}

/* header */

interface Header extends IAttr {
	view?: Date;
	monthTitle?: string[];
}

const convertHeader = (attr: Header) => {
	attr.view ??= new Date();
	attr.monthTitle ??= [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	if (attr.view && attr.monthTitle) {
		const view = copyDate(attr.view);
		const monthTitle = [...attr.monthTitle];

		attr.elem = [
			new button(
				{
					color: "transparent",
					on: {
						click: (e) => {
							const target = e.target as Element;
							const container = target.closest(".calendar-header") as Element;

							view.setMonth(view.getMonth() - 1);

							container.dispatchEvent(
								new CustomEvent("change.bs.calendar.header", {
									detail: view,
								})
							);
						},
					},
				},
				new icon({ id: "arrow-left" })
			),
			new div(
				{ marginX: "auto" },
				new button(
					{
						color: "transparent",
						fontWeight: "bold",
						on: {
							click: (e) => {
								const target = e.target as Element;
								const container = target.closest(".calendar-header") as Element;

								modal.show(
									modal.create({
										on: {
											"show.bs.modal": (e) => {
												const mdl = e.target as Element;
												(mdl.querySelector("select[name='month']") as HTMLSelectElement).value =
													view.getMonth().toString();
												(mdl.querySelector("input[name='year']") as HTMLInputElement).value =
													view.getFullYear().toString();
											},
										},
										title: "Calendar",
										elem: new inputgroup.container([
											new select(
												{
													name: "month",
												},
												monthTitle.map((i, ix) => {
													return new option({ value: ix.toString(), elem: i });
												})
											),
											new input({ name: "year", type: "number", min: 0, max: 9999 }),
										]),
										btn: ["ok", "cancel"],
										btnFn: (e) => {
											const mdl = (e.target as Element).closest(".modal") as Element;
											const mdlMonth = parseInt(
												(mdl.querySelector("select[name='month']") as HTMLSelectElement).value
											);
											const mdlYear = parseInt(
												(mdl.querySelector("input[name='year']") as HTMLInputElement).value
											);

											view.setMonth(mdlMonth);
											view.setFullYear(mdlYear);

											container.dispatchEvent(
												new CustomEvent("change.bs.calendar.header", {
													detail: view,
												})
											);

											modal.hide(mdl);
										},
									})
								);
							},
						},
					},
					`${attr.monthTitle[attr.view.getMonth()]} ${attr.view.getFullYear()}`
				)
			),
			new button(
				{
					color: "transparent",
					on: {
						click: (e) => {
							const target = e.target as Element;
							const container = target.closest(".calendar-header") as Element;

							view.setMonth(view.getMonth() + 1);

							container.dispatchEvent(
								new CustomEvent("change.bs.calendar.header", {
									detail: view,
								})
							);
						},
					},
				},
				new icon({ id: "arrow-right" })
			),
		];
	}

	attr = mergeObject(
		{
			class: "calendar-header",
			display: "flex",
			justifyContent: "between",
			alignItem: "center",
			paddingBottom: 2,
		},
		attr
	);

	delete attr.view;
	delete attr.monthTitle;

	return attr;
};

class header extends div {
	constructor();
	constructor(attr: Header);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convertHeader, arg));
	}
}

/* main */
export interface Calendar extends IAttr {
	multiple?: boolean;
	view?: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle?: string[];
	monthTitle?: string[];
}

const convert = (attr: Calendar) => {
	const data = {
		multiple: attr.multiple,
		view: attr.view ? copyDate(attr.view) : undefined,
		startDate: attr.startDate ? copyDate(attr.startDate) : undefined,
		endDate: attr.endDate ? copyDate(attr.endDate) : undefined,
		dayTitle: attr.dayTitle,
		monthTitle: attr.monthTitle,
	};

	const onItemChange = (e: Event) => {
		const itemContainer = e.target as Element;
		const container = itemContainer.closest(".calendar") as Element;
		const result = (e as CustomEvent).detail;

		data.startDate = result.startDate;
		data.endDate = result.endDate;

		replaceWith(
			itemContainer,
			new item({
				view: data.view,
				startDate: data.startDate,
				endDate: data.endDate,
				multiple: data.multiple,
				dayTitle: data.dayTitle,
				on: {
					"change.bs.calendar.item": onItemChange,
				},
			})
		);

		container.dispatchEvent(
			new CustomEvent("change.bs.calendar", {
				detail: {
					startDate: data.startDate,
					endDate: data.endDate,
				},
			})
		);
	};

	const onHeaderChange = (e: Event) => {
		const headerContainer = e.target as Element;
		const itemContainer = headerContainer.nextElementSibling as Element;
		data.view = (e as CustomEvent).detail;

		replaceWith(
			headerContainer,
			new header({
				view: data.view,
				monthTitle: data.monthTitle,
				on: {
					"change.bs.calendar.header": onHeaderChange,
				},
			})
		);

		replaceWith(
			itemContainer,
			new item({
				view: data.view,
				startDate: data.startDate,
				endDate: data.endDate,
				multiple: data.multiple,
				dayTitle: data.dayTitle,
				on: {
					"change.bs.calendar.item": onItemChange,
				},
			})
		);
	};

	attr.elem = [
		new header({
			view: data.view,
			monthTitle: data.monthTitle,
			on: {
				"change.bs.calendar.header": onHeaderChange,
			},
		}),
		new item({
			view: data.view,
			startDate: data.startDate,
			endDate: data.endDate,
			multiple: data.multiple,
			dayTitle: data.dayTitle,
			on: {
				"change.bs.calendar.item": onItemChange,
			},
		}),
	];

	attr = mergeObject(
		{
			class: "calendar",
		},
		attr
	);

	delete attr.multiple;
	delete attr.view;
	delete attr.startDate;
	delete attr.endDate;
	delete attr.dayTitle;
	delete attr.monthTitle;

	return attr;
};

export class calendar extends div {
	constructor();
	constructor(attr: Calendar);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
