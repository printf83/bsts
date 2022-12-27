
type base12= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type base5= 0 | 1 | 2 | 3 | 4 | 5;
type baseColumn= "auto" |  base5;
type baseViewPort = "sm" | "md" | "lg" | "xl" | "xxl";
type baseDisplay= "none"|"inline"|"inline-block"|"block"|"grid"|"table"|"table-cell"|"table-row"|"flex"|"inline-flex"
type baseFlex= "row"|"row-reverse"|"column"|"column-reverse"|"wrap"|"wrap-reverse"|"nowrap"|"fill"|"shrink-0"|"shrink-1"|"grow-0"|"grow-1"
type baseJustifyContent ="start"|"end"|"center"|"between"|"around"|"evenly"
type baseAlign= "start" | "end" | "center" | "baseline" | "stretch";
type baseAlignContent= "start" | "end" | "center" | "between" | "stretch";
type baseOrder= "first" |  base12 | "last";
type baseGrid=  base12;
type baseRowCol= "auto" |  base12;
type baseFloat= "start" | "end" | "none";
type baseColor= "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "muted" | "white" | "black" | "transparent" | "link"
type basePositionView= "start" | "center" | "end";

export namespace bs{
    export type spacer = baseColumn | `${baseViewPort}-${baseColumn}`;
    export type display=  baseDisplay | `${baseViewPort}-${baseDisplay}`;
    export type flex= baseFlex | `${baseViewPort}-${baseFlex}`;
    export type justifyContent= baseJustifyContent | `${baseViewPort}-${baseJustifyContent}`;
    export type align= baseAlign | `${baseViewPort}-${baseAlign}`;
    export type alignContent= baseAlignContent | `${baseViewPort}-${baseAlignContent}`;
    export type alignItem= align;
    export type alignSelf= align;
    export type order= baseOrder | `${baseViewPort}-${baseOrder}`;
    export type grid= baseGrid | `${baseViewPort}-${baseGrid}`;
    export type offset= grid;
    export type rowCol= baseRowCol | `${baseViewPort}-${baseRowCol}`;
    export type float= baseFloat | `${baseViewPort}-${baseFloat}`;
    export type color= baseColor;
    export type positionView= basePositionView | `${baseViewPort}-${basePositionView}`;
    export type visible= boolean;
    export type textWrap= boolean;
    export type fontItalic= boolean;
    export type bgGradient= true;
    export type wordBreak= true;
    export type monospace= true;
    export type placeholder= true;
    export type row= boolean;
    export type col= true|rowCol;
        
    export type userSelect= "all" | "auto" | "none";
    export type pointerEvent= "auto" | "none";
    export type position= "static" | "relative";
    export type overflow= "auto" | "hidden" | "scroll";

    export type textAlign= positionView;
    export type verticalAlign= "baseline" | "top" | "middle" | "bottom" | "text-top" | "text-bottom";

    export type opacity= 0 | 25 | 50 | 75 | 100;
    export type bgOpacity= 10 | 25 | 50 | 75 | 100;
    export type textOpacity= 25 | 50 | 75 | 100;

    export type textBgColor= color;
    export type textColor= color;
    export type bgColor= color;

    export type textTransform= "lowercase" | "uppercase" | "capitalize";
    export type textDecoration= "underline" | "line-through" | "none";
    export type lineHeight= 1 | "sm" | "base" | "lg";

    export type fontSize= 1 | 2 | 3 | 4 | 5 | 6;
    export type fontWeight= "bold" | "bolder" | "normal" | "light" | "lighter";

    export type top= 0 | 50 | 100;
    export type bottom= top;
    export type start= top;
    export type end= top;
    export type tMiddle= true | "x" | "y";

    export type height= "auto" | 25 | 50 | 75 | 100;
    export type width= height;
    export type maxHeight= 100;
    export type maxWidth= 100;
    export type minViewHeight= 100;
    export type minViewWidth= 100;
    export type viewHeight= 100;
    export type viewWidth= 100;

    export type placeholderAnimation= "glow" | "wave";
    export type placeholderWeight= "lg" | "sm" | "xs";

    export type shadow= true | false | "none" | "sm" | "lg" | "inset";
    export type borderNone= true | "top" | "end" | "bottom" | "start";
    export type border= borderNone | false;

    export type borderColor= color;
    export type borderOpacity= 10 | 25 | 50 | 75;
    export type borderWidth= base5;
    export type roundedNone=true | false | "top" | "end" | "bottom" | "start"
    export type rounded= roundedNone | "circle" | "pill";
    export type roundedSize= base5;

    export type padding= spacer;
    export type paddingX= spacer;
    export type paddingY= spacer;
    export type paddingTop= spacer;
    export type paddingBottom= spacer;
    export type paddingStart= spacer;
    export type paddingEnd= spacer;

    export type margin= spacer;
    export type marginX= spacer;
    export type marginY= spacer;
    export type marginTop= spacer;
    export type marginBottom= spacer;
    export type marginStart= spacer;
    export type marginEnd= spacer;

    export type gap= spacer;
    export type gutter= spacer;
    export type gutterX= spacer;
    export type gutterY= spacer;

    export type print= display;
    export type container= true | "xs" | baseViewPort | "fluid";
}

export const db = {
        
        userSelect: { format: "user-select-$1" },
        pointerEvent: { format: "pe-$1" },
        position: { format: "position-$1"},
        overflow: { format: "overflow-$1" },

        textAlign: { format: "text-$1" },
        verticalAlign: { format: "align-$1" },

        opacity: { format: "opacity-$1" },
        bgOpacity: { format: "bg-opacity-$1"},
        textOpacity: { format: "text-opacity-$1"},

        btnColor: { format: "btn-$1"},
        btnOutlineColor: { format: "btn-outline-$1"},
        alertColor: { format: "alert-$1"},

        textBgColor: { format: "text-bg-$1"},
        textColor: { format: "text-$1"},
        linkColor: { format: "link-$1"},
        bgColor: { format: "bg-$1"},

        textTransform: { format: "text-$1"},
        textDecoration: { format: "text-decoration-$1"},
        lineHeight: { format: "lh-$1"},

        fontSize: { format: "fs-$1"},
        fontWeight: { format: "fw-$1"},

        top: { format: "top-$1"},
        bottom: { format: "bottom-$1"},
        start: { format: "start-$1"},
        end: { format: "end-$1"},
        tMiddle: { format: "translate-middle-$1", formatTrue: "translate-middle"},

        height: { format: "h-$1"},
        width: { format: "w-$1"},
        maxHeight: { format: "mh-$1"},
        maxWidth: { format: "mw-$1"},
        minViewHeight: { format: "min-vh-$1"},
        minViewWidth: { format: "min-vw-$1"},
        viewHeight: { format: "vh-$1"},
        viewWeight: { format: "vw-$1"},
        
        placeholderAnimation: { format: "placeholder-$1"},
        placeholderWeight: { format: "placeholder-$1", formatValue: "placeholder $1"},
        
        shadow: { format: "shadow-$1", formatTrue: "shadow", formatFalse: "shadow-none" },

        border: { format: "border-$1", formatTrue: "border", formatFalse: "border-0" },
        borderNone: { format: "border border-$1-0", formatTrue: "border-0" },
        borderColor: { format: "border-$1", formatValue: "border" },
        borderOpacity: { format: "border-opacity-$1", formatValue: "border" },
        borderWidth: { format: "border-$1", formatValue: "border" },

        rounded: { format: "rounded-$1", formatTrue: "rounded", formatFalse: "rounded-0" },
        roundedNone: { format: "rounded-$1-0", formatTrue: "rounded-0", formatFalse: "rounded", formatValue: "rounded" },
        roundedSize: { format: "rounded-$1", formatValue: "rounded" },

        padding: { format: "p-$1"},
        paddingX: { format: "px-$1"},
        paddingY: { format: "py-$1"},
        paddingTop: { format: "pt-$1"},
        paddingBottom: { format: "pb-$1"},
        paddingStart: { format: "ps-$1"},
        paddingEnd: { format: "pe-$1"},

        margin: { format: "m-$1"},
        marginX: { format: "mx-$1"},
        marginY: { format: "my-$1"},
        marginTop: { format: "mt-$1"},
        marginBottom: { format: "mb-$1"},
        marginStart: { format: "ms-$1"},
        marginEnd: { format: "me-$1"},

        gap: { format: "gap-$1"},
        gutter: { format: "g-$1"},
        gutterX: { format: "gx-$1"},
        gutterY: { format: "gy-$1"},

        display: { format: "d-$1"},
        print: { format: "d-print-$1"},
        container: {format: "container-$1",formatTrue: "container"},

        flex: {format: "flex-$1"},
        float: {format: "float-$1"},
        order: {format: "order-$1"},
        offset: {format: "offset-$1"},
        alignContent: {format: "align-content-$1"},
        justifyContent: {format: "justify-content-$1"},
        alignItem: {format: "align-items-$1"},
        alignSelf: {format: "align-self-$1"},
        visible: {formatTrue: "visible",formatFalse: "invisible"},
        textWrap: {formatTrue: "text-wrap",formatFalse: "text-nowrap"},
        fontItalic: {formatTrue: "fst-italic",formatFalse: "fst-normal"},
        bgGradient: {formatTrue: "bg-gradient"},
        wordBreak: {formatTrue: "text-break"},
        monospace: { formatTrue: "font-monospace"},
        placeholder: {formatTrue: "placeholder"},
        row: { formatTrue: "row", formatFalse: null},
        col: {format: "col-$1", formatTrue: "col"},
        rowCol: {format: "row-cols-$1"},
}

