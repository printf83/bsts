export namespace bsType {
	type VIEWPORT = "sm" | "md" | "lg" | "xl" | "xxl";
	type SPACER = "auto" | 0 | 1 | 2 | 3 | 4 | 5;
	type GRID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	type ROWCOL = "auto" | GRID;
	type FLEX =
		| "row"
		| "row-reverse"
		| "column"
		| "column-reverse"
		| "wrap"
		| "wrap-reverse"
		| "nowrap"
		| "fill"
		| "shrink-0"
		| "shrink-1"
		| "grow-0"
		| "grow-1";
	type FLOAT = "start" | "end" | "none";
	type ORDER = "first" | "last" | GRID;
	type ALIGN = "start" | "end" | "center" | "baseline" | "stretch";
	type ALIGNCONTENT = "start" | "end" | "center" | "between" | "around" | "stretch";
	type JUSTIFYCONTENT = "start" | "end" | "center" | "between" | "around" | "evenly";
	type DISPLAY =
		| "none"
		| "inline"
		| "inline-block"
		| "block"
		| "grid"
		| "table"
		| "table-cell"
		| "table-row"
		| "flex"
		| "inline-flex";
	type POSITIONVIEW = "start" | "center" | "end";

	type COLOR = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
	type COLOREMPHASIS = `${COLOR}-emphasis`;
	type COLORSUBTLE = `${COLOR}-subtle`;
	type BODYCOLOR = "body" | "body-secondary" | "body-tertiary";
	type OTHERCOLOR = "white" | "black";
	type BODYTEXTCOLOR = BODYCOLOR | OTHERCOLOR | "body-emphasis";
	type OPACITY = 0 | 25 | 50 | 75 | 100;
	type BGOPACITY = 10 | 25 | 50 | 75 | 100;
	type TEXTOPACITY = 25 | 50 | 75 | 100;
	type BORDEROPACITY = 10 | 25 | 50 | 75;
	type LINKOFFSET = 1 | 2 | 3;
	type LINKOPACITY = BGOPACITY;
	type LINKUNDERLINEOPACITY = 0 | LINKOPACITY;
	type FONTSIZE = 1 | 2 | 3 | 4 | 5 | 6;
	type TOP = 0 | 50 | 100;
	type HEIGHT = "auto" | 25 | 50 | 75 | 100;
	type BORDERWIDTH = 0 | 1 | 2 | 3 | 4 | 5;
	type ZINDEX = 0 | 1 | 2 | 3 | "n1";
	type OBJECTFIT = "contain" | "cover" | "fill" | "scale" | "none";
	type STICKY = "top" | "bottom";

	type ROUNDED = "top" | "end" | "bottom" | "start";
	type ROUNDEDSIZE = BORDERWIDTH;
	type ROUNDEDSTYLE = "pill" | "circle";

	type _grid = GRID | `${GRID}` | `${VIEWPORT}-${GRID}`;
	type _spacer = SPACER | `${SPACER}` | `${VIEWPORT}-${SPACER}`;
	type _align = ALIGN | `${VIEWPORT}-${ALIGN}`;
	type _positionView = POSITIONVIEW | `${VIEWPORT}-${POSITIONVIEW}`;

	//use by component and handle by component rule
	export type color = COLOR;
	export type viewport = VIEWPORT;

	//attribute
	export type theme = "light" | "dark" | "auto";
	export type pointer = true;
	export type label = string;
	export type labelledby = string;
	export type ownby = string;
	export type describedby = string;
	export type controlfor = string;

	//class
	export type flex = FLEX | `${VIEWPORT}-${FLEX}`;
	export type float = FLOAT | `${VIEWPORT}-${FLOAT}`;
	export type order = ORDER | `${ORDER}` | `${VIEWPORT}-${ORDER}`;
	export type offset = _grid;

	export type alignContent = ALIGNCONTENT | `${VIEWPORT}-${ALIGNCONTENT}`;
	export type justifyContent = JUSTIFYCONTENT | `${VIEWPORT}-${JUSTIFYCONTENT}`;
	export type alignItem = _align;
	export type alignSelf = _align;
	export type display = DISPLAY | `${VIEWPORT}-${DISPLAY}`;
	export type rowCol = ROWCOL | `${ROWCOL}` | `${VIEWPORT}-${ROWCOL}`;

	export type visible = boolean;
	export type textWrap = boolean;
	export type fontItalic = boolean;
	export type bgGradient = true;
	export type textBreak = true;
	export type monospace = true;

	export type loadingPlaceholder = true;
	export type loadingPlaceholderAnimation = "glow" | "wave";
	export type loadingPlaceholderWeight = "lg" | "sm" | "xs";

	export type row = true;
	export type col = true | ROWCOL | `${ROWCOL}` | VIEWPORT | `${VIEWPORT}-${ROWCOL}`;

	export type userSelect = "all" | "auto" | "none";
	export type pointerEvent = "auto" | "none";
	export type position = "static" | "relative" | "absolute" | "fixed" | "sticky";
	export type overflow = "auto" | "hidden" | "scroll" | "visible";
	export type overflowX = overflow;
	export type overflowY = overflow;

	export type textAlign = _positionView;
	export type verticalAlign = "baseline" | "top" | "middle" | "bottom" | "text-top" | "text-bottom";

	export type opacity = OPACITY | `${OPACITY}`;
	export type bgOpacity = BGOPACITY | `${BGOPACITY}`;
	export type textOpacity = TEXTOPACITY | `${TEXTOPACITY}`;

	export type focusRing = true | COLOR;
	export type textBgColor = COLOR;
	export type textColor = COLOR | COLOREMPHASIS | BODYCOLOR | BODYTEXTCOLOR | OTHERCOLOR | "reset";
	export type bgColor = COLOR | COLORSUBTLE | BODYCOLOR | OTHERCOLOR | "transparent";

	export type iconLink = true | "hover";

	export type textTransform = "lowercase" | "uppercase" | "capitalize";
	export type textDecoration = "underline" | "line-through" | "none";
	export type lineHeight = 1 | "1" | "sm" | "base" | "lg";

	export type fontSize = FONTSIZE | `${FONTSIZE}`;
	export type fontDisplay = fontSize;
	export type fontWeight = "bold" | "bolder" | "semibold" | "medium" | "normal" | "light" | "lighter";

	export type top = TOP | `${TOP}`;
	export type bottom = top;
	export type start = top;
	export type end = top;
	export type tMiddle = true | "x" | "y";

	export type height = HEIGHT | `${HEIGHT}`;
	export type width = height;

	export type maxHeight = 100 | "100";
	export type maxWidth = 100 | "100";
	export type minViewHeight = 100 | "100";
	export type minViewWidth = 100 | "100";
	export type viewHeight = 100 | "100";
	export type viewWidth = 100 | "100";

	export type shadow = boolean | "none" | "sm" | "lg" | "inset";

	export type borderNone = true | "top" | "end" | "bottom" | "start";
	export type border = false | borderNone;
	export type borderColor = COLOR | COLORSUBTLE | OTHERCOLOR;
	export type borderOpacity = BORDEROPACITY | `${BORDEROPACITY}`;
	export type borderWidth = BORDERWIDTH | `${BORDERWIDTH}`;

	export type roundedNone = border;
	export type rounded =
		| boolean
		| ROUNDEDSIZE
		| `${ROUNDEDSIZE}`
		| ROUNDED
		| ROUNDEDSTYLE
		| `${ROUNDED}-${ROUNDEDSTYLE}`
		| `${ROUNDED}-${ROUNDEDSIZE}`
		| `${ROUNDEDSTYLE}-${ROUNDEDSIZE}`;
	export type roundedSize = ROUNDEDSIZE | `${ROUNDEDSIZE}`;

	export type padding = _spacer;
	export type paddingX = _spacer;
	export type paddingY = _spacer;
	export type paddingTop = _spacer;
	export type paddingBottom = _spacer;
	export type paddingStart = _spacer;
	export type paddingEnd = _spacer;

	export type margin = _spacer;
	export type marginX = _spacer;
	export type marginY = _spacer;
	export type marginTop = _spacer;
	export type marginBottom = _spacer;
	export type marginStart = _spacer;
	export type marginEnd = _spacer;

	export type gap = _spacer;
	export type gutter = _spacer;
	export type gutterX = _spacer;
	export type gutterY = _spacer;

	export type print = display;
	export type container = true | VIEWPORT | "fluid" | "xs";

	export type zIndex = ZINDEX | `${ZINDEX}`;
	export type objectFit = OBJECTFIT | `${VIEWPORT}-${OBJECTFIT}`;

	export type ratio = true | "1x1" | "4x3" | "16x9" | "21x9";
	export type fixed = STICKY;
	export type sticky = STICKY | `${VIEWPORT}-${STICKY}`;

	export type clearfix = true;
	export type textTruncate = true;
	export type vstack = true;
	export type hstack = true;
	export type visually = "hidden" | "hidden-focusable";
	export type h = fontDisplay;
	export type small = true;

	//specific component only
	export type linkColor = COLOR | BODYTEXTCOLOR;
	export type linkUnderlineColor = linkColor;
	export type linkOffset = LINKOFFSET | `${LINKOFFSET}`;
	export type linkOffsetHover = linkOffset;
	export type linkOpacity = LINKOPACITY | `${LINKOPACITY}`;
	export type linkOpacityHover = linkOpacity;
	export type linkUnderline = true;
	export type linkUnderlineOpacity = LINKUNDERLINEOPACITY | `${LINKUNDERLINEOPACITY}`;
	export type linkUnderlineOpacityHover = linkUnderlineOpacity;

	export type btnColor = COLOR | "link" | "transparent";
	export type btnOutlineColor = COLOR;
	export type alertColor = COLOR;
	export type alertDismissible = true;
	export type dropdownDirection = "up" | "start" | "end";
	export type dropdownMenuPositionView = _positionView;
}
