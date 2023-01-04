import { addIntoClassList } from "../fn/addIntoClassList.js";
import { camel2Dash } from "../fn/camel2Dash.js";
import { dash2Camel } from "../fn/dash2Camel.js";
import { setting } from "../fn/setting.js";
import { attachFn } from "./base.interface.js";

export namespace bsType{
    const base5 = [0, 1, 2, 3, 4, 5];
    const truefalse = [true, false] as const;
    const trueonly = [true] as const;
    const hundred = [100] as const;

    export const grid = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        "sm-0",
        "sm-1",
        "sm-2",
        "sm-3",
        "sm-4",
        "sm-5",
        "sm-6",
        "sm-7",
        "sm-8",
        "sm-9",
        "sm-10",
        "sm-11",
        "sm-12",
        "md-0",
        "md-1",
        "md-2",
        "md-3",
        "md-4",
        "md-5",
        "md-6",
        "md-7",
        "md-8",
        "md-9",
        "md-10",
        "md-11",
        "md-12",
        "lg-0",
        "lg-1",
        "lg-2",
        "lg-3",
        "lg-4",
        "lg-5",
        "lg-6",
        "lg-7",
        "lg-8",
        "lg-9",
        "lg-10",
        "lg-11",
        "lg-12",
        "xl-0",
        "xl-1",
        "xl-2",
        "xl-3",
        "xl-4",
        "xl-5",
        "xl-6",
        "xl-7",
        "xl-8",
        "xl-9",
        "xl-10",
        "xl-11",
        "xl-12",
        "xxl-0",
        "xxl-1",
        "xxl-2",
        "xxl-3",
        "xxl-4",
        "xxl-5",
        "xxl-6",
        "xxl-7",
        "xxl-8",
        "xxl-9",
        "xxl-10",
        "xxl-11",
        "xxl-12",
    ] as const;

    export const flex = [
        "row",
        "row-reverse",
        "column",
        "column-reverse",
        "wrap",
        "wrap-reverse",
        "nowrap",
        "fill",
        "shrink-0",
        "shrink-1",
        "grow-0",
        "grow-1",

        "sm-row",
        "sm-row-reverse",
        "sm-column",
        "sm-column-reverse",
        "sm-wrap",
        "sm-wrap-reverse",
        "sm-nowrap",
        "sm-fill",
        "sm-shrink-0",
        "sm-shrink-1",
        "sm-grow-0",
        "sm-grow-1",

        "md-row",
        "md-row-reverse",
        "md-column",
        "md-column-reverse",
        "md-wrap",
        "md-wrap-reverse",
        "md-nowrap",
        "md-fill",
        "md-shrink-0",
        "md-shrink-1",
        "md-grow-0",
        "md-grow-1",

        "lg-row",
        "lg-row-reverse",
        "lg-column",
        "lg-column-reverse",
        "lg-wrap",
        "lg-wrap-reverse",
        "lg-nowrap",
        "lg-fill",
        "lg-shrink-0",
        "lg-shrink-1",
        "lg-grow-0",
        "lg-grow-1",

        "xl-row",
        "xl-row-reverse",
        "xl-column",
        "xl-column-reverse",
        "xl-wrap",
        "xl-wrap-reverse",
        "xl-nowrap",
        "xl-fill",
        "xl-shrink-0",
        "xl-shrink-1",
        "xl-grow-0",
        "xl-grow-1",

        "xxl-row",
        "xxl-row-reverse",
        "xxl-column",
        "xxl-column-reverse",
        "xxl-wrap",
        "xxl-wrap-reverse",
        "xxl-nowrap",
        "xxl-fill",
        "xxl-shrink-0",
        "xxl-shrink-1",
        "xxl-grow-0",
        "xxl-grow-1",
    ] as const;

    export const float = [
        "start",
        "end",
        "none",
        "sm-start",
        "sm-end",
        "sm-none",
        "md-start",
        "md-end",
        "md-none",
        "lg-start",
        "lg-end",
        "lg-none",
        "xl-start",
        "xl-end",
        "xl-none",
        "xxl-start",
        "xxl-end",
        "xxl-none",
    ] as const;

    export const order = [
        "first",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        "last",
        "sm-first",
        "sm-0",
        "sm-1",
        "sm-2",
        "sm-3",
        "sm-4",
        "sm-5",
        "sm-6",
        "sm-7",
        "sm-8",
        "sm-9",
        "sm-10",
        "sm-11",
        "sm-12",
        "sm-last",
        "md-first",
        "md-0",
        "md-1",
        "md-2",
        "md-3",
        "md-4",
        "md-5",
        "md-6",
        "md-7",
        "md-8",
        "md-9",
        "md-10",
        "md-11",
        "md-12",
        "md-last",
        "lg-first",
        "lg-0",
        "lg-1",
        "lg-2",
        "lg-3",
        "lg-4",
        "lg-5",
        "lg-6",
        "lg-7",
        "lg-8",
        "lg-9",
        "lg-10",
        "lg-11",
        "lg-12",
        "lg-last",
        "xl-first",
        "xl-0",
        "xl-1",
        "xl-2",
        "xl-3",
        "xl-4",
        "xl-5",
        "xl-6",
        "xl-7",
        "xl-8",
        "xl-9",
        "xl-10",
        "xl-11",
        "xl-12",
        "xl-last",
        "xxl-first",
        "xxl-0",
        "xxl-1",
        "xxl-2",
        "xxl-3",
        "xxl-4",
        "xxl-5",
        "xxl-6",
        "xxl-7",
        "xxl-8",
        "xxl-9",
        "xxl-10",
        "xxl-11",
        "xxl-12",
        "xxl-last",
    ] as const;

    export const offset = grid;

    export const align = [
        "start",
        "end",
        "center",
        "baseline",
        "stretch",
        "sm-start",
        "sm-end",
        "sm-center",
        "sm-baseline",
        "sm-stretch",
        "md-start",
        "md-end",
        "md-center",
        "md-baseline",
        "md-stretch",
        "lg-start",
        "lg-end",
        "lg-center",
        "lg-baseline",
        "lg-stretch",
        "xl-start",
        "xl-end",
        "xl-center",
        "xl-baseline",
        "xl-stretch",
        "xxl-start",
        "xxl-end",
        "xxl-center",
        "xxl-baseline",
        "xxl-stretch",
    ] as const;

    export const alignContent = [
        "start",
        "end",
        "center",
        "between",
        "around",
        "stretch",
        "sm-start",
        "sm-end",
        "sm-center",
        "sm-between",
        "sm-around",
        "sm-stretch",
        "md-start",
        "md-end",
        "md-center",
        "md-between",
        "md-around",
        "md-stretch",
        "lg-start",
        "lg-end",
        "lg-center",
        "lg-between",
        "lg-around",
        "lg-stretch",
        "xl-start",
        "xl-end",
        "xl-center",
        "xl-between",
        "xl-around",
        "xl-stretch",
        "xxl-start",
        "xxl-end",
        "xxl-center",
        "xxl-between",
        "xxl-around",
        "xxl-stretch",
    ] as const;

    export const justifyContent = [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "sm-start",
        "sm-end",
        "sm-center",
        "sm-between",
        "sm-around",
        "sm-evenly",
        "md-start",
        "md-end",
        "md-center",
        "md-between",
        "md-around",
        "md-evenly",
        "lg-start",
        "lg-end",
        "lg-center",
        "lg-between",
        "lg-around",
        "lg-evenly",
        "xl-start",
        "xl-end",
        "xl-center",
        "xl-between",
        "xl-around",
        "xl-evenly",
        "xxl-start",
        "xxl-end",
        "xxl-center",
        "xxl-between",
        "xxl-around",
        "xxl-evenly",
    ] as const;  
   
    export const alignItem = align;
    export const alignSelf = align;


    export const spacer = [
        0,
        1,
        2,
        3,
        4,
        5,
        "auto",
        "sm-0",
        "md-0",
        "lg-0",
        "xl-0",
        "xxl-0",
        "sm-1",
        "md-1",
        "lg-1",
        "xl-1",
        "xxl-1",
        "sm-2",
        "md-2",
        "lg-2",
        "xl-2",
        "xxl-2",
        "sm-3",
        "md-3",
        "lg-3",
        "xl-3",
        "xxl-3",
        "sm-4",
        "md-4",
        "lg-4",
        "xl-4",
        "xxl-4",
        "sm-5",
        "md-5",
        "lg-5",
        "xl-5",
        "xxl-5",
        "sm-auto",
        "md-auto",
        "lg-auto",
        "xl-auto",
        "xxl-auto",
    ] as const;

    export const display = [
        "none",
        "inline",
        "inline-block",
        "block",
        "grid",
        "table",
        "table-cell",
        "table-row",
        "flex",
        "inline-flex",

        "sm-none",
        "sm-inline",
        "sm-inline-block",
        "sm-block",
        "sm-grid",
        "sm-table",
        "sm-table-cell",
        "sm-table-row",
        "sm-flex",
        "sm-inline-flex",

        "md-none",
        "md-inline",
        "md-inline-block",
        "md-block",
        "md-grid",
        "md-table",
        "md-table-cell",
        "md-table-row",
        "md-flex",
        "md-inline-flex",

        "lg-none",
        "lg-inline",
        "lg-inline-block",
        "lg-block",
        "lg-grid",
        "lg-table",
        "lg-table-cell",
        "lg-table-row",
        "lg-flex",
        "lg-inline-flex",

        "xl-none",
        "xl-inline",
        "xl-inline-block",
        "xl-block",
        "xl-grid",
        "xl-table",
        "xl-table-cell",
        "xl-table-row",
        "xl-flex",
        "xl-inline-flex",

        "xxl-none",
        "xxl-inline",
        "xxl-inline-block",
        "xxl-block",
        "xxl-grid",
        "xxl-table",
        "xxl-table-cell",
        "xxl-table-row",
        "xxl-flex",
        "xxl-inline-flex",
    ] as const;
   

    export const rowCol = [
        "auto",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        "sm-auto",
        "sm-0",
        "sm-1",
        "sm-2",
        "sm-3",
        "sm-4",
        "sm-5",
        "sm-6",
        "sm-7",
        "sm-8",
        "sm-9",
        "sm-10",
        "sm-11",
        "sm-12",
        "md-auto",
        "md-0",
        "md-1",
        "md-2",
        "md-3",
        "md-4",
        "md-5",
        "md-6",
        "md-7",
        "md-8",
        "md-9",
        "md-10",
        "md-11",
        "md-12",
        "lg-auto",
        "lg-0",
        "lg-1",
        "lg-2",
        "lg-3",
        "lg-4",
        "lg-5",
        "lg-6",
        "lg-7",
        "lg-8",
        "lg-9",
        "lg-10",
        "lg-11",
        "lg-12",
        "xl-auto",
        "xl-0",
        "xl-1",
        "xl-2",
        "xl-3",
        "xl-4",
        "xl-5",
        "xl-6",
        "xl-7",
        "xl-8",
        "xl-9",
        "xl-10",
        "xl-11",
        "xl-12",
        "xxl-auto",
        "xxl-0",
        "xxl-1",
        "xxl-2",
        "xxl-3",
        "xxl-4",
        "xxl-5",
        "xxl-6",
        "xxl-7",
        "xxl-8",
        "xxl-9",
        "xxl-10",
        "xxl-11",
        "xxl-12",
    ] as const;

    export const color = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
    ] as const;

    export const positionView = [
        "start",
        "sm-start",
        "md-start",
        "lg-start",
        "xl-start",
        "center",
        "sm-center",
        "md-center",
        "lg-center",
        "xl-center",
        "end",
        "sm-end",
        "md-end",
        "lg-end",
        "xl-end",
    ] as const;

    export const visible = truefalse;
    export const textWrap = truefalse;
    export const fontItalic = truefalse;

    export const bgGradient = trueonly;
    export const wordBreak = trueonly;
    export const monospace = trueonly;
    export const placeholder = trueonly;

    export const row = truefalse;

    export const col = [
        true,
        "auto",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        "sm-auto",
        "sm-0",
        "sm-1",
        "sm-2",
        "sm-3",
        "sm-4",
        "sm-5",
        "sm-6",
        "sm-7",
        "sm-8",
        "sm-9",
        "sm-10",
        "sm-11",
        "sm-12",
        "md-auto",
        "md-0",
        "md-1",
        "md-2",
        "md-3",
        "md-4",
        "md-5",
        "md-6",
        "md-7",
        "md-8",
        "md-9",
        "md-10",
        "md-11",
        "md-12",
        "lg-auto",
        "lg-0",
        "lg-1",
        "lg-2",
        "lg-3",
        "lg-4",
        "lg-5",
        "lg-6",
        "lg-7",
        "lg-8",
        "lg-9",
        "lg-10",
        "lg-11",
        "lg-12",
        "xl-auto",
        "xl-0",
        "xl-1",
        "xl-2",
        "xl-3",
        "xl-4",
        "xl-5",
        "xl-6",
        "xl-7",
        "xl-8",
        "xl-9",
        "xl-10",
        "xl-11",
        "xl-12",
        "xxl-auto",
        "xxl-0",
        "xxl-1",
        "xxl-2",
        "xxl-3",
        "xxl-4",
        "xxl-5",
        "xxl-6",
        "xxl-7",
        "xxl-8",
        "xxl-9",
        "xxl-10",
        "xxl-11",
        "xxl-12",
    ] as const;

    export const userSelect = ["all" , "auto" , "none"] as const;
    export const pointerEvent = ["auto" , "none"] as const;
    export const position = ["static" , "relative"] as const;
    export const overflow = ["auto" , "hidden" , "scroll"] as const;

    export const textAlign = positionView;
    export const verticalAlign = ["baseline" , "top" , "middle" , "bottom" , "text-top" , "text-bottom"] as const;

    export const opacity = [0 , 25 , 50 , 75 , 100] as const;
    export const bgOpacity = [10 , 25 , 50 , 75 , 100] as const;
    export const textOpacity = [25 , 50 , 75 , 100] as const;

    export const btnColor = color;
    export const btnOutlineColor = color;
    export const alertColor = color;

    export const textBgColor = color;
    export const textColor = color;
    export const linkColor = color;
    export const bgColor = color;


    export const textTransform = ["lowercase" , "uppercase" , "capitalize"] as const;
    export const textDecoration = ["underline" , "line-through" , "none"] as const;
    export const lineHeight = [1 , "sm" , "base" , "lg"] as const;
    
    export const fontSize = [1, 2, 3, 4, 5, 6] as const;
    export const fontWeight = ["bold" , "bolder" , "normal" , "light" , "lighter"] as const;
    
    export const top = [0, 50, 100] as const;
    export const bottom = top;
    export const start = top;
    export const end = top;
    export const tMiddle = [true, "x", "y"] as const;
    
    export const height = ["auto", 25, 50, 75, 100] as const;
    export const width = height;

    export const maxHeight = hundred;
    export const maxWidth = hundred;
    export const minViewHeight = hundred;
    export const minViewWidth = hundred;
    export const viewHeight = hundred;
    export const viewWidth = hundred;

    export const placeholderAnimation = [ "glow" , "wave"] as const;
    export const placeholderWeight = ["lg" , "sm" , "xs"] as const;
    
    export const shadow = [true , false , "none" , "sm" , "lg" , "inset"] as const;
    export const borderNone = [true , "top" , "end" , "bottom" , "start"] as const;
    export const border = [true ,false, "top" , "end" , "bottom" , "start"] as const;

    export const borderColor = color;
    export const borderOpacity = [10 , 25 , 50 , 75] as const;
    export const borderWidth = base5;
    export const roundedNone = [true , false , "top" , "end" , "bottom" , "start"] as const;
    export const rounded = [true, false, "top", "end", "bottom", "start", "circle", "pill"] as const;
    export const roundedSize = base5;

    export const padding = spacer;
    export const paddingX = spacer;
    export const paddingY = spacer;
    export const paddingTop = spacer;
    export const paddingBottom = spacer;
    export const paddingStart = spacer;
    export const paddingEnd = spacer;

    export const margin = spacer;
    export const marginX = spacer;
    export const marginY = spacer;
    export const marginTop = spacer;
    export const marginBottom = spacer;
    export const marginStart = spacer;
    export const marginEnd = spacer;

    export const gap = spacer;
    export const gutter = spacer;
    export const gutterX = spacer;
    export const gutterY = spacer;

    export const print = display;
    export const container = [true,"xs","sm","md","lg","xl","xxl","fluid"];
    
    


}

export namespace bs{

    export interface rule{
        format?: string,
        formatValue?:string|null,
        formatTrue?: string|null,
        formatFalse?:string|null,
        value: any[]
        
    }

    export type spacer = typeof bsType.spacer;
    export type display = typeof bsType.display;
    export type flex = typeof bsType.flex;
    export type justifyContent = typeof bsType.justifyContent;
    export type align = typeof bsType.align;
    export type alignContent = typeof bsType.alignContent;
    export type alignItem = typeof bsType.align;
    export type alignSelf = typeof bsType.align;
    export type order = typeof bsType.order;
    export type grid = typeof bsType.grid;
    export type offset = typeof bsType.grid;
    export type rowCol = typeof bsType.rowCol;
    export type float = typeof bsType.float;
    export type color = typeof bsType.color;
    export type positionView = typeof bsType.positionView;
    
    export type visible = typeof bsType.visible;
    export type textWrap = typeof bsType.textWrap;
    export type fontItalic = typeof bsType.fontItalic;
    export type bgGradient = typeof bsType.bgGradient;
    export type wordBreak = typeof bsType.wordBreak;
    export type monospace = typeof bsType.monospace;
    export type placeholder = typeof bsType.placeholder;
    export type row = typeof bsType.row;
    export type col = typeof bsType.col;
        
    export type userSelect = typeof bsType.userSelect;
    export type pointerEvent = typeof bsType.pointerEvent;
    export type position = typeof bsType.position;
    export type overflow = typeof bsType.overflow;

    export type textAlign = typeof bsType.textAlign;
    export type verticalAlign = typeof bsType.verticalAlign;

    export type opacity = typeof bsType.opacity;
    export type bgOpacity = typeof bsType.bgOpacity;
    export type textOpacity = typeof bsType.textOpacity;

    export type textBgColor = typeof bsType.textBgColor;
    export type textColor = typeof bsType.textColor;
    export type bgColor = typeof bsType.bgColor;

    export type textTransform = typeof bsType.textTransform;
    export type textDecoration = typeof bsType.textDecoration;
    export type lineHeight = typeof bsType.lineHeight;

    export type fontSize = typeof bsType.fontSize;
    export type fontWeight = typeof bsType.fontWeight;

    export type top = typeof bsType.top;
    export type bottom = typeof bsType.bottom;
    export type start = typeof bsType.start;
    export type end = typeof bsType.end;
    export type tMiddle = typeof bsType.tMiddle;

    export type height = typeof bsType.height;
    export type width = typeof bsType.width;
    export type maxHeight = typeof bsType.maxHeight;
    export type maxWidth = typeof bsType.maxWidth;
    export type minViewHeight = typeof bsType.minViewHeight;
    export type minViewWidth = typeof bsType.minViewWidth;
    export type viewHeight = typeof bsType.viewHeight;
    export type viewWidth = typeof bsType.viewWidth;

    export type placeholderAnimation = typeof bsType.placeholderAnimation;
    export type placeholderWeight = typeof bsType.placeholderWeight;

    export type shadow = typeof bsType.shadow;
    export type borderNone = typeof bsType.borderNone;
    export type border = typeof bsType.border;

    export type borderColor = typeof bsType.borderColor;
    export type borderOpacity = typeof bsType.borderOpacity;
    export type borderWidth = typeof bsType.borderWidth;
    export type roundedNone = typeof bsType.roundedNone;
    export type rounded = typeof bsType.rounded;
    export type roundedSize = typeof bsType.roundedSize;

    export type padding = typeof bsType.padding;
    export type paddingX = typeof bsType.paddingX;
    export type paddingY = typeof bsType.paddingY;
    export type paddingTop = typeof bsType.paddingTop;
    export type paddingBottom = typeof bsType.paddingBottom;
    export type paddingStart = typeof bsType.paddingStart;
    export type paddingEnd = typeof bsType.paddingEnd;

    export type margin = typeof bsType.margin;
    export type marginX = typeof bsType.marginX;
    export type marginY = typeof bsType.marginY;
    export type marginTop = typeof bsType.marginTop;
    export type marginBottom = typeof bsType.marginBottom;
    export type marginStart = typeof bsType.marginStart;
    export type marginEnd = typeof bsType.marginEnd;

    export type gap = typeof bsType.gap;
    export type gutter = typeof bsType.gutter;
    export type gutterX = typeof bsType.gutterX;
    export type gutterY = typeof bsType.gutterY;

    export type print = typeof bsType.print;
    export type container = typeof bsType.container;
}

const db = {
        
        userSelect: { format: "user-select-$1", value:bsType.userSelect.concat() } satisfies bs.rule,
        pointerEvent: { format: "pe-$1", value:bsType.pointerEvent.concat() } satisfies bs.rule,
        position: { format: "position-$1", value:bsType.position.concat() } satisfies bs.rule,
        overflow: { format: "overflow-$1", value:bsType.overflow.concat() } satisfies bs.rule,

        textAlign: { format: "text-$1", value:bsType.textAlign.concat() } satisfies bs.rule,
        verticalAlign: { format: "align-$1", value:bsType.verticalAlign.concat() } satisfies bs.rule,

        opacity: { format: "opacity-$1" , value:bsType.opacity.concat() } satisfies bs.rule,
        bgOpacity: { format: "bg-opacity-$1", value:bsType.bgOpacity.concat() } satisfies bs.rule,
        textOpacity: { format: "text-opacity-$1", value:bsType.textOpacity.concat() } satisfies bs.rule,

        btnColor: { format: "btn-$1", value:bsType.btnColor.concat() } satisfies bs.rule,
        btnOutlineColor: { format: "btn-outline-$1", value:bsType.btnOutlineColor.concat() } satisfies bs.rule,
        alertColor: { format: "alert-$1", value:bsType.alertColor.concat() } satisfies bs.rule,

        textBgColor: { format: "text-bg-$1", value:bsType.textBgColor.concat() } satisfies bs.rule,
        textColor: { format: "text-$1", value:bsType.textColor.concat() } satisfies bs.rule,
        linkColor: { format: "link-$1", value:bsType.linkColor.concat() } satisfies bs.rule,
        bgColor: { format: "bg-$1", value:bsType.bgColor.concat() } satisfies bs.rule,

        textTransform: { format: "text-$1", value:bsType.textTransform.concat() } satisfies bs.rule,
        textDecoration: { format: "text-decoration-$1", value:bsType.textDecoration.concat() } satisfies bs.rule,
        lineHeight: { format: "lh-$1", value:bsType.lineHeight.concat() } satisfies bs.rule,

        fontSize: { format: "fs-$1", value:bsType.fontSize.concat() } satisfies bs.rule,
        fontWeight: { format: "fw-$1", value:bsType.fontWeight.concat() } satisfies bs.rule,

        top: { format: "top-$1", value:bsType.top.concat() } satisfies bs.rule,
        bottom: { format: "bottom-$1", value:bsType.bottom.concat() } satisfies bs.rule,
        start: { format: "start-$1", value:bsType.start.concat() } satisfies bs.rule,
        end: { format: "end-$1", value:bsType.end.concat() } satisfies bs.rule,
        tMiddle: { format: "translate-middle-$1", formatTrue: "translate-middle", value:bsType.tMiddle.concat() } satisfies bs.rule,

        height: { format: "h-$1", value:bsType.height.concat() } satisfies bs.rule,
        width: { format: "w-$1", value:bsType.width.concat() } satisfies bs.rule,
        maxHeight: { format: "mh-$1", value:bsType.maxHeight.concat() } satisfies bs.rule,
        maxWidth: { format: "mw-$1", value:bsType.maxWidth.concat() } satisfies bs.rule,
        minViewHeight: { format: "min-vh-$1", value:bsType.minViewHeight.concat() } satisfies bs.rule,
        minViewWidth: { format: "min-vw-$1", value:bsType.minViewWidth.concat() } satisfies bs.rule,
        viewHeight: { format: "vh-$1", value:bsType.viewHeight.concat() } satisfies bs.rule,
        viewWidth: { format: "vw-$1", value:bsType.viewWidth.concat() } satisfies bs.rule,
        
        placeholderAnimation: { format: "placeholder-$1", value:bsType.placeholderAnimation.concat() } satisfies bs.rule,
        placeholderWeight: { format: "placeholder-$1", formatValue: "placeholder $1", value:bsType.placeholderWeight.concat() } satisfies bs.rule,
        
        shadow: { format: "shadow-$1", formatTrue: "shadow", formatFalse: "shadow-none", value:bsType.shadow.concat() } satisfies bs.rule,

        border: { format: "border-$1", formatTrue: "border", formatFalse: "border-0" , value:bsType.border.concat() } satisfies bs.rule,
        borderNone: { format: "border border-$1-0", formatTrue: "border-0" , value:bsType.borderNone.concat() } satisfies bs.rule,
        borderColor: { format: "border-$1", formatValue: "border", value:bsType.borderColor.concat() } satisfies bs.rule,
        borderOpacity: { format: "border-opacity-$1", formatValue: "border", value:bsType.borderOpacity.concat() } satisfies bs.rule,
        borderWidth: { format: "border-$1", formatValue: "border", value:bsType.borderWidth.concat() } satisfies bs.rule,

        rounded: { format: "rounded-$1", formatTrue: "rounded", formatFalse: "rounded-0", value:bsType.rounded.concat() } satisfies bs.rule,
        roundedNone: { format: "rounded-$1-0", formatTrue: "rounded-0", formatFalse: "rounded", formatValue: "rounded", value:bsType.roundedNone.concat() } satisfies bs.rule,
        roundedSize: { format: "rounded-$1", formatValue: "rounded", value:bsType.roundedSize.concat() } satisfies bs.rule,

        padding: { format: "p-$1", value:bsType.padding.concat() } satisfies bs.rule,
        paddingX: { format: "px-$1", value:bsType.paddingX.concat() } satisfies bs.rule,
        paddingY: { format: "py-$1", value:bsType.paddingY.concat() } satisfies bs.rule,
        paddingTop: { format: "pt-$1", value:bsType.paddingTop.concat() } satisfies bs.rule,
        paddingBottom: { format: "pb-$1", value:bsType.paddingBottom.concat() } satisfies bs.rule,
        paddingStart: { format: "ps-$1", value:bsType.paddingStart.concat() } satisfies bs.rule,
        paddingEnd: { format: "pe-$1", value:bsType.paddingEnd.concat() } satisfies bs.rule,

        margin: { format: "m-$1", value:bsType.margin.concat() } satisfies bs.rule,
        marginX: { format: "mx-$1", value:bsType.marginX.concat() } satisfies bs.rule,
        marginY: { format: "my-$1", value:bsType.marginY.concat() } satisfies bs.rule,
        marginTop: { format: "mt-$1", value:bsType.marginTop.concat() } satisfies bs.rule,
        marginBottom: { format: "mb-$1", value:bsType.marginBottom.concat() } satisfies bs.rule,
        marginStart: { format: "ms-$1", value:bsType.marginStart.concat() } satisfies bs.rule,
        marginEnd: { format: "me-$1", value:bsType.marginEnd.concat() } satisfies bs.rule,

        gap: { format: "gap-$1", value:bsType.gap.concat() } satisfies bs.rule,
        gutter: { format: "g-$1", value:bsType.gutter.concat() } satisfies bs.rule,
        gutterX: { format: "gx-$1", value:bsType.gutterX.concat() } satisfies bs.rule,
        gutterY: { format: "gy-$1", value:bsType.gutterY.concat() } satisfies bs.rule,

        display: { format: "d-$1", value:bsType.display.concat() } satisfies bs.rule,
        print: { format: "d-print-$1", value:bsType.print.concat() } satisfies bs.rule,
        container: {format: "container-$1",formatTrue: "container", value:bsType.container.concat() } satisfies bs.rule,

        flex: {format: "flex-$1", value:bsType.flex.concat() } satisfies bs.rule,
        float: {format: "float-$1", value:bsType.float.concat() } satisfies bs.rule,
        order: {format: "order-$1", value:bsType.order.concat() } satisfies bs.rule,
        offset: {format: "offset-$1", value:bsType.offset.concat() } satisfies bs.rule,

        alignContent: {format: "align-content-$1", value:bsType.alignContent.concat() } satisfies bs.rule,
        justifyContent: {format: "justify-content-$1", value:bsType.justifyContent.concat() } satisfies bs.rule,
        alignItem: {format: "align-items-$1", value:bsType.alignItem.concat() } satisfies bs.rule,
        alignSelf: {format: "align-self-$1", value:bsType.alignSelf.concat() } satisfies bs.rule,

        visible: {formatTrue: "visible",formatFalse: "invisible", value:bsType.visible.concat() } satisfies bs.rule,
        textWrap: {formatTrue: "text-wrap",formatFalse: "text-nowrap", value:bsType.textWrap.concat() } satisfies bs.rule,
        fontItalic: {formatTrue: "fst-italic",formatFalse: "fst-normal", value:bsType.fontItalic.concat() } satisfies bs.rule,
        bgGradient: {formatTrue: "bg-gradient", value:bsType.bgGradient.concat() } satisfies bs.rule,
        wordBreak: {formatTrue: "text-break", value:bsType.wordBreak.concat() } satisfies bs.rule,
        monospace: { formatTrue: "font-monospace", value:bsType.monospace.concat() } satisfies bs.rule,
        placeholder: {formatTrue: "placeholder", value:bsType.placeholder.concat() } satisfies bs.rule,
        row: { formatTrue: "row", formatFalse: null, value:bsType.row.concat() } satisfies bs.rule,
        col: {format: "col-$1", formatTrue: "col", value:bsType.col.concat() } satisfies bs.rule,
        rowCol: {format: "row-cols-$1", value:bsType.rowCol.concat() } satisfies bs.rule,
}

let allowProp: string[] = [];

const allow = (key:string):string|null => {
	if (allowProp.length === 0) {
		let t = Object.keys(db);
		allowProp = [
			...t,
			...t
				.map((i) => {
					let j = camel2Dash(i);
					if (j !== i) {
						return j;
					}
				})
				.filter(Boolean),
		];
	}

	if (allowProp.indexOf(key) > -1) {
		let k = dash2Camel(key);
		if (k !== key) {
			return k;
		} else {
			return key;
		}
	}

	return null;
}

export const attachBootstrap: attachFn = (key, elem, opt) => {
	let a_key = allow(key);
	if (a_key !== null) {
		if (Array.isArray(opt[key])) {
			let shared = false;
			opt[key].forEach((i:any) => {
				if (db[a_key].value.indexOf(i) > -1) {
					shared = shared === false && db[a_key].shared !== false ? true : false;
					if (db[a_key].hasOwnProperty("formatValue")) {
						elem = addIntoClassList(elem, db[a_key].formatValue);
					}

					if (i === true) {
						if (db[a_key].hasOwnProperty("formatTrue")) {
							elem = addIntoClassList(elem, db[a_key].formatTrue);
						}
					} else if (i === false) {
						if (db[a_key].hasOwnProperty("formatFalse")) {
							elem = addIntoClassList(elem, db[a_key].formatFalse);
						}
					} else {
						if (db[a_key].hasOwnProperty("format")) {
							elem = addIntoClassList(elem, db[a_key].format.replace(/\$1/g, i));
						}
					}
				} else {
					if (setting.DEBUG)
						console.warn(`${a_key}:"${i}" is not supported value for bootstrap property`);
				}
			});

			if (!shared) {
				delete opt[key];
			}
		} else {
			if (db[a_key].value.indexOf(opt[key]) > -1) {
				if (db[a_key].hasOwnProperty("formatValue")) {
					elem = addIntoClassList(elem, db[a_key].formatValue);
				}

				if (opt[key] === true) {
					if (db[a_key].hasOwnProperty("formatTrue")) {
						elem = addIntoClassList(elem, db[a_key].formatTrue);
					}
				} else if (opt[key] === false) {
					if (db[a_key].hasOwnProperty("formatFalse")) {
						elem = addIntoClassList(elem, db[a_key].formatFalse);
					}
				} else {
					if (db[a_key].hasOwnProperty("format")) {
						elem = addIntoClassList(elem, db[a_key].format.replace(/\$1/g, opt[key]));
					}
				}

				if (!db[a_key].shared) {
					delete opt[key];
				}
			} else {
				if (setting.DEBUG)
					console.warn(`${opt[key]}:"${key}" is not supported value for bootstrap property`);
			}
		}
	}

	return { opt, elem };
}