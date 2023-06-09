import { IAttr, genTagClass } from "../core/tag.js";
import { bsConsNoElemArg } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { replaceWith } from "../core/builder.js";
import { ul } from "../html/ul.js";
import { li } from "../html/li.js";
import * as modal from "../bootstrap/modal/_index.js";
import * as inputgroup from "../bootstrap/inputgroup/_index.js";
import { button } from "../bootstrap/button.js";
import { icon } from "../bootstrap/icon.js";
import { a } from "../html/a.js";
import { option } from "../html/option.js";
import { select } from "../bootstrap/select.js";
import { input } from "../bootstrap/input.js";
import { mergeClass } from "../core/mergeClass.js";

interface CalendarHeader {
	view: Date;
	monthTitle: string[];
	onchange: (sender: Element, view: Date) => void;
}

interface CalendarItem {
	multiple: boolean;
	view: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle: string[];
	onchange: (sender: Element, arg: { startDate?: Date; endDate?: Date }) => void;
}

const genCalendarHeader = (arg: CalendarHeader) => {
	return new div({ display: "flex", justifyContent: "between", alignItem: "center", paddingBottom: 2 }, [
		new button(
			{
				color: "transparent",
				on: {
					click: (e) => {
						const target = e.target as Element;
						arg.view.setMonth(arg.view.getMonth() - 1);
						arg.onchange(target, arg.view);
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
							modal.show(
								modal.simple({
									on: {
										"show.bs.modal": (e) => {
											const mdl = e.target as Element;
											(mdl.querySelector("select[name='month']") as HTMLSelectElement).value =
												arg.view.getMonth().toString();
											(mdl.querySelector("input[name='year']") as HTMLInputElement).value =
												arg.view.getFullYear().toString();
										},
									},
									title: "Calendar",
									elem: new inputgroup.container([
										new select(
											{
												name: "month",
											},
											arg.monthTitle.map((i, ix) => {
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

										arg.view.setMonth(mdlMonth);
										arg.view.setFullYear(mdlYear);
										arg.onchange(target, arg.view);

										modal.hide(mdl);
									},
								})
							);
						},
					},
				},
				`${arg.monthTitle[arg.view.getMonth()]} ${arg.view.getFullYear()}`
			)
		),
		new button(
			{
				color: "transparent",
				on: {
					click: (e) => {
						const target = e.target as Element;
						arg.view.setMonth(arg.view.getMonth() + 1);
						arg.onchange(target, arg.view);
					},
				},
			},
			new icon({ id: "arrow-right" })
		),
	]);
};

const genCalendarItem = (arg: CalendarItem) => {
	if (arg.multiple && arg.startDate && arg.endDate) {
		if (arg.startDate > arg.endDate) {
			arg.startDate = arg.endDate;
		}

		if (arg.endDate < arg.startDate) {
			arg.endDate = arg.startDate;
		}
	} else if (!arg.multiple) {
		arg.endDate = undefined;
	}

	const startDate = arg.startDate ? arg.startDate : undefined;
	const strStartDate = startDate
		? `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
		: undefined;
	const startTime = startDate ? startDate.getTime() : undefined;

	const endDate = arg.endDate ? arg.endDate : undefined;
	const strEndDate = endDate ? `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}` : undefined;
	const endTime = endDate ? endDate.getTime() : undefined;

	const today = new Date();
	const todayYear = today.getFullYear();
	const todayMonth = today.getMonth();
	const todayDate = today.getDate();
	const strToday = `${todayYear}-${todayMonth}-${todayDate}`;

	arg.view.setDate(1);
	const current = arg.view;
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
	for (let w = 0; w < arg.dayTitle.length; w++) {
		days.push(new li({ class: "day" }, `${arg.dayTitle[w]}`));
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
						strStartDate && d === strStartDate ? "selected" : undefined,
						strEndDate && d === strEndDate ? "selected" : undefined,
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
						strStartDate && d === strStartDate ? "selected" : undefined,
						strEndDate && d === strEndDate ? "selected" : undefined,
						startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
					],
					data: { value: dDate },
					on: {
						click: (e) => {
							const target = e.target as Element;
							const dataValue = target.closest("li")?.getAttribute("data-value");
							if (dataValue) {
								const value = parseInt(dataValue);

								if (arg.multiple) {
									if (arg.startDate && arg.endDate) {
										arg.startDate = new Date(value);
										arg.endDate = undefined;
									} else if (arg.startDate && !arg.endDate) {
										const sValue = arg.startDate.getTime();

										if (sValue > value) {
											arg.startDate = new Date(value);
											arg.endDate = new Date(sValue);
										} else {
											arg.endDate = new Date(value);
										}
									}
								} else {
									arg.startDate = new Date(value);
								}

								arg.onchange(target, {
									startDate: arg.startDate,
									endDate: arg.endDate,
								});
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
						strStartDate && d === strStartDate ? "selected" : undefined,
						strEndDate && d === strEndDate ? "selected" : undefined,
						startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
					],
				},
				`${z}`
			)
		);
	}

	return new ul(
		{
			unstyle: true,
			display: "grid",
			gap: 1,
			textAlign: "center",
			class: "calendar-item",
			style: { "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr 1fr" },
		},
		days
	);
};

const genCalendar = (arg?: {
	multiple?: boolean;
	view?: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle?: string[];
	monthTitle?: string[];
	onchange?: (sender: Element, arg: { startDate?: Date; endDate?: Date }) => void;
}) => {
	arg ??= {};

	arg.multiple ??= false;
	arg.view ??= new Date();

	if (arg.monthTitle && arg.monthTitle.length !== 12) {
		arg.monthTitle = undefined;
	}

	arg.monthTitle ??= [
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

	if (arg.dayTitle && arg.dayTitle.length !== 7) {
		arg.dayTitle = undefined;
	}

	arg.dayTitle ??= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	return new div({ class: "calendar", padding: 2 }, [
		genCalendarHeader({
			view: arg.view,
			monthTitle: arg.monthTitle,
			onchange: (sender, view) => {
				let calendarContainer = sender.closest(".calendar");
				if (calendarContainer) {
					replaceWith(
						calendarContainer,
						genCalendar({
							multiple: arg?.multiple,
							dayTitle: arg?.dayTitle,
							monthTitle: arg?.monthTitle,
							startDate: arg?.startDate,
							endDate: arg?.endDate,
							view: view,
							onchange: arg?.onchange,
						})
					);
				}
			},
		}),
		genCalendarItem({
			multiple: arg?.multiple,
			startDate: arg?.startDate,
			endDate: arg?.endDate,
			view: arg.view,
			dayTitle: arg.dayTitle,
			onchange: (sender, detail) => {
				let calendarContainer = sender.closest(".calendar");
				if (calendarContainer) {
					replaceWith(
						calendarContainer,
						genCalendar({
							multiple: arg?.multiple,
							dayTitle: arg?.dayTitle,
							monthTitle: arg?.monthTitle,
							startDate: detail?.startDate,
							endDate: detail?.endDate,
							view: arg?.view,
							onchange: arg?.onchange,
						})
					);
				}
			},
		}),
	]);
};

export interface Calendar extends IAttr {
	multiple?: boolean;
	view?: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle?: string[];
	monthTitle?: string[];
}

const convert = (attr: Calendar) => {
	attr.class = mergeClass(attr.class, "calendar-container");
	attr.elem = genCalendar({
		multiple: attr.multiple,
		view: attr.view,
		startDate: attr.startDate,
		endDate: attr.endDate,
		dayTitle: attr.dayTitle,
		monthTitle: attr.monthTitle,
	});

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

export const Calendar = (Attr?: Calendar) => genTagClass<calendar, Calendar>(calendar, Attr);
