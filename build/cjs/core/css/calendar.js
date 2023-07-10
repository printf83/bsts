"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendar = void 0;
exports.calendar = `
/* 
src/core/css/calendar.ts 
------------------------- */

.calendar-item li{
    display: inline-flex;
    justify-content: space-around;
    vertical-align: middle;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    border-radius: 0.25rem;
    color: rgba(var(--bs-body-color-rgb), 0.5);
    font-weight: inherit;
}

.calendar-item li.day {
    color: rgba(var(--bs-body-color-rgb), 0.75);
}

.calendar-item li.current-month:hover {
    cursor: pointer;
    background-color: rgba(var(--bs-tertiary-bg-rgb), 1)
}

.calendar-item li.current-month a {
    color: var(--bs-emphasis-color);
    text-decoration: none;
}

.calendar-item li.current-month.today a {
    text-decoration: underline;
    font-weight: 600;
    font-style: italic;
}

.calendar-item li.selected,
.calendar-item li.selected-start,
.calendar-item li.selected-end {
    background-color: rgba(var(--bs-primary-rgb),0.25);
}

.calendar-item li.selected:hover{
    background-color: rgba(var(--bs-primary-rgb),0.15);
}

.calendar-item li.current-month.selected-start, 
.calendar-item li.current-month.selected-end{
    background-color: rgba(var(--bs-primary-rgb),1);
}
.calendar-item li.current-month.selected-start a, 
.calendar-item li.current-month.selected-end a{
    color: #fff !important;    
    font-weight: 600;
}

.calendar-item li.current-month.selected-start:hover, 
.calendar-item li.current-month.selected-end:hover{
    background-color: rgba(var(--bs-primary-rgb),0.75);
}
`;
