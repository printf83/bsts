"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = exports.calendar = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const div_js_1 = require("../html/div.js");
const builder_js_1 = require("../core/builder.js");
const ul_js_1 = require("../html/ul.js");
const li_js_1 = require("../html/li.js");
const modal = __importStar(require("../bootstrap/modal/_index.js"));
const inputgroup = __importStar(require("../bootstrap/inputgroup/_index.js"));
const button_js_1 = require("../bootstrap/button.js");
const icon_js_1 = require("../bootstrap/icon.js");
const a_js_1 = require("../html/a.js");
const option_js_1 = require("../html/option.js");
const select_js_1 = require("../bootstrap/select.js");
const input_js_1 = require("../bootstrap/input.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const copyDate = (d) => {
    return new Date(d.getTime());
};
const convertItem = (attr) => {
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
    }
    else if (!attr.multiple) {
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
    let days = [];
    //add days
    for (let w = 0; w < attr.dayTitle.length; w++) {
        days.push(new li_js_1.li({ class: "day" }, `${attr.dayTitle[w]}`));
    }
    //add prev month date
    for (let x = currentFirstDay; x > 0; x--) {
        let f = prevDayCount - x + 1;
        let d = `${prevYear}-${prevMonth}-${f}`;
        let dDate = new Date(prevYear, prevMonth, f).getTime();
        days.push(new li_js_1.li({
            class: [
                strStartDate && d === strStartDate ? "selected-start" : undefined,
                strEndDate && d === strEndDate ? "selected-end" : undefined,
                startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
            ],
        }, `${f}`));
    }
    //add current month date
    for (let y = 1; y <= currentDayCount; y++) {
        let d = `${currentYear}-${currentMonth}-${y}`;
        let dDate = new Date(currentYear, currentMonth, y).getTime();
        days.push(new li_js_1.li({
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
                    const target = e.target;
                    const container = target.closest(".calendar-item");
                    const dataValue = target.closest("li")?.getAttribute("data-value");
                    if (dataValue) {
                        const value = parseInt(dataValue);
                        let resStartDate;
                        let resEndDate;
                        if (multiple) {
                            if (startDate && endDate) {
                                resStartDate = new Date(value);
                                resEndDate = undefined;
                            }
                            else if (startDate && !endDate) {
                                if (startTime > value) {
                                    resStartDate = new Date(value);
                                    resEndDate = new Date(startTime);
                                }
                                else {
                                    resStartDate = new Date(startTime);
                                    resEndDate = new Date(value);
                                }
                            }
                        }
                        else {
                            resStartDate = new Date(value);
                            resEndDate = undefined;
                        }
                        container.dispatchEvent(new CustomEvent("change.bs.calendar.item", {
                            detail: {
                                startDate: resStartDate,
                                endDate: resEndDate,
                            },
                        }));
                    }
                },
            },
        }, new a_js_1.a({ href: "#" }, `${y}`)));
    }
    //add next month date
    for (let z = 1; z <= nextViewDayCount; z++) {
        let d = `${nextYear}-${nextMonth}-${z}`;
        let dDate = new Date(nextYear, nextMonth, z).getTime();
        days.push(new li_js_1.li({
            class: [
                strStartDate && d === strStartDate ? "selected-start" : undefined,
                strEndDate && d === strEndDate ? "selected-end" : undefined,
                startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
            ],
        }, `${z}`));
    }
    attr.elem = days;
    attr = (0, mergeObject_js_1.mergeObject)({
        unstyle: true,
        display: "grid",
        gap: 1,
        textAlign: "center",
        class: "calendar-item",
        style: { "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr 1fr" },
    }, attr);
    delete attr.dayTitle;
    delete attr.endDate;
    delete attr.multiple;
    delete attr.startDate;
    delete attr.view;
    return attr;
};
class item extends ul_js_1.ul {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConsNoElemArg)(convertItem, arg));
    }
}
const convertHeader = (attr) => {
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
            new button_js_1.button({
                color: "transparent",
                on: {
                    click: (e) => {
                        const target = e.target;
                        const container = target.closest(".calendar-header");
                        view.setMonth(view.getMonth() - 1);
                        container.dispatchEvent(new CustomEvent("change.bs.calendar.header", {
                            detail: view,
                        }));
                    },
                },
            }, new icon_js_1.icon({ id: "arrow-left" })),
            new div_js_1.div({ marginX: "auto" }, new button_js_1.button({
                color: "transparent",
                fontWeight: "bold",
                on: {
                    click: (e) => {
                        const target = e.target;
                        const container = target.closest(".calendar-header");
                        modal.show(modal.create({
                            on: {
                                "show.bs.modal": (e) => {
                                    const mdl = e.target;
                                    mdl.querySelector("select[name='month']").value =
                                        view.getMonth().toString();
                                    mdl.querySelector("input[name='year']").value =
                                        view.getFullYear().toString();
                                },
                            },
                            title: "Calendar",
                            elem: new inputgroup.container([
                                new select_js_1.select({
                                    name: "month",
                                }, monthTitle.map((i, ix) => {
                                    return new option_js_1.option({ value: ix.toString(), elem: i });
                                })),
                                new input_js_1.input({ name: "year", type: "number", min: 0, max: 9999 }),
                            ]),
                            btn: ["ok", "cancel"],
                            btnFn: (e) => {
                                const mdl = e.target.closest(".modal");
                                const mdlMonth = parseInt(mdl.querySelector("select[name='month']").value);
                                const mdlYear = parseInt(mdl.querySelector("input[name='year']").value);
                                view.setMonth(mdlMonth);
                                view.setFullYear(mdlYear);
                                container.dispatchEvent(new CustomEvent("change.bs.calendar.header", {
                                    detail: view,
                                }));
                                modal.hide(mdl);
                            },
                        }));
                    },
                },
            }, `${attr.monthTitle[attr.view.getMonth()]} ${attr.view.getFullYear()}`)),
            new button_js_1.button({
                color: "transparent",
                on: {
                    click: (e) => {
                        const target = e.target;
                        const container = target.closest(".calendar-header");
                        view.setMonth(view.getMonth() + 1);
                        container.dispatchEvent(new CustomEvent("change.bs.calendar.header", {
                            detail: view,
                        }));
                    },
                },
            }, new icon_js_1.icon({ id: "arrow-right" })),
        ];
    }
    attr = (0, mergeObject_js_1.mergeObject)({
        class: "calendar-header",
        display: "flex",
        justifyContent: "between",
        alignItem: "center",
        paddingBottom: 2,
    }, attr);
    delete attr.view;
    delete attr.monthTitle;
    return attr;
};
class header extends div_js_1.div {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConsNoElemArg)(convertHeader, arg));
    }
}
const convert = (attr) => {
    const data = {
        multiple: attr.multiple,
        view: attr.view ? copyDate(attr.view) : undefined,
        startDate: attr.startDate ? copyDate(attr.startDate) : undefined,
        endDate: attr.endDate ? copyDate(attr.endDate) : undefined,
        dayTitle: attr.dayTitle,
        monthTitle: attr.monthTitle,
    };
    const onItemChange = (e) => {
        const itemContainer = e.target;
        const container = itemContainer.closest(".calendar");
        const result = e.detail;
        data.startDate = result.startDate;
        data.endDate = result.endDate;
        (0, builder_js_1.replaceWith)(itemContainer, new item({
            view: data.view,
            startDate: data.startDate,
            endDate: data.endDate,
            multiple: data.multiple,
            dayTitle: data.dayTitle,
            on: {
                "change.bs.calendar.item": onItemChange,
            },
        }));
        container.dispatchEvent(new CustomEvent("change.bs.calendar", {
            detail: {
                startDate: data.startDate,
                endDate: data.endDate,
            },
        }));
    };
    const onHeaderChange = (e) => {
        const headerContainer = e.target;
        const itemContainer = headerContainer.nextElementSibling;
        data.view = e.detail;
        (0, builder_js_1.replaceWith)(headerContainer, new header({
            view: data.view,
            monthTitle: data.monthTitle,
            on: {
                "change.bs.calendar.header": onHeaderChange,
            },
        }));
        (0, builder_js_1.replaceWith)(itemContainer, new item({
            view: data.view,
            startDate: data.startDate,
            endDate: data.endDate,
            multiple: data.multiple,
            dayTitle: data.dayTitle,
            on: {
                "change.bs.calendar.item": onItemChange,
            },
        }));
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
    attr = (0, mergeObject_js_1.mergeObject)({
        class: "calendar",
    }, attr);
    delete attr.multiple;
    delete attr.view;
    delete attr.startDate;
    delete attr.endDate;
    delete attr.dayTitle;
    delete attr.monthTitle;
    return attr;
};
class calendar extends div_js_1.div {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConsNoElemArg)(convert, arg));
    }
}
exports.calendar = calendar;
const Calendar = (Attr) => (0, tag_js_1.genTagClass)(calendar, Attr);
exports.Calendar = Calendar;
