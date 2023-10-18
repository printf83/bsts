export namespace bsTypeA {
	const VIEWPORT = ["sm", "md", "lg", "xl", "xxl"];
	const SPACER = ["auto", 0, 1, 2, 3, 4, 5];
	const GRID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const ROWCOL = ["auto", ...GRID];
	const FLEX = [
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
	];
	const FLOAT = ["start", "end", "none"];
	const ORDER = ["first", "last", ...GRID];
	const ALIGN = ["start", "end", "center", "baseline", "stretch"];
	const ALIGNCONTENT = ["start", "end", "center", "between", "around", "stretch"];
	const JUSTIFYCONTENT = ["start", "end", "center", "between", "around", "evenly"];
	const DISPLAY = [
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
	];
	const POSITIONVIEW = ["start", "center", "end"];

	const COLOR = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
	const COLOREMPHASIS = COLOR.map((i) => `${i}-emphasis`);
	const COLORSUBTLE = COLOR.map((i) => `${i}-subtle`);
	const BODYCOLOR = ["body", "body-secondary", "body-tertiary"];
	const OTHERCOLOR = ["white", "black"];
	const BODYTEXTCOLOR = [...BODYCOLOR, ...OTHERCOLOR, "body-emphasis"];
	const OPACITY = [0, 25, 50, 75, 100];
	const BGOPACITY = [10, 25, 50, 75, 100];
	const TEXTOPACITY = [25, 50, 75, 100];
	const BORDEROPACITY = [10, 25, 50, 75];
	const LINKOFFSET = [1, 2, 3];
	const LINKOPACITY = BGOPACITY;
	const LINKUNDERLINEOPACITY = [0, ...LINKOPACITY];
	const FONTSIZE = [1, 2, 3, 4, 5, 6];
	const TOP = [0, 50, 100];
	const HEIGHT = ["auto", 25, 50, 75, 100];
	const BORDERWIDTH = [0, 1, 2, 3, 4, 5];
	const ZINDEX = [0, 1, 2, 3, "n1"];
	const OBJECTFIT = ["contain", "cover", "fill", "scale", "none"];
	const STICKY = ["top", "bottom"];

	const ROUNDED = ["top", "end", "bottom", "start"];
	const ROUNDEDSIZE = BORDERWIDTH;
	const ROUNDEDSTYLE = ["pill", "circle"];

	const _grid = [...GRID, ...GRID.map((i) => `${i}`), ...VIEWPORT.map((i) => GRID.map((j) => `${i}-${j}`)).flat()];
	const _spacer = [
		...SPACER,
		...SPACER.map((i) => `${i}`),
		...VIEWPORT.map((i) => SPACER.map((j) => `${i}-${j}`)).flat(),
	];
	const _align = [...ALIGN, ...VIEWPORT.map((i) => ALIGN.map((j) => `${i}-${j}`)).flat()];
	const _positionView = [...POSITIONVIEW, ...VIEWPORT.map((i) => POSITIONVIEW.map((j) => `${i}-${j}`)).flat()];

	//use by component and handle by component rule
	// NO NEED TO DO THIS BCOZ HANDLE BY COMPONENT
	// export const color = [...COLOR, ...OTHERCOLOR];
	// export const viewport = VIEWPORT;

	//attribute
	// NO NEED TO DO THIS BCOZ ATTR VALUE NOT VALIDATE
	// export const theme = ["light", "dark", "auto"];
	// export const pointer = [true];
	// export const label = "string";
	// export const labelledby = "string";
	// export const ownby = "string";
	// export const describedby = "string";
	// export const controlfor = "string";

	//class
	export const flex = [...FLEX, ...VIEWPORT.map((i) => FLEX.map((j) => `${i}-${j}`)).flat()];
	export const float = [...FLOAT, ...VIEWPORT.map((i) => FLOAT.map((j) => `${i}-${j}`)).flat()];
	export const order = [
		...ORDER,
		...ORDER.map((i) => `${i}`),
		...VIEWPORT.map((i) => ORDER.map((j) => `${i}-${j}`)).flat(),
	];
	export const offset = _grid;

	export const alignContent = [...ALIGNCONTENT, ...VIEWPORT.map((i) => ALIGNCONTENT.map((j) => `${i}-${j}`)).flat()];
	export const justifyContent = [
		...JUSTIFYCONTENT,
		...VIEWPORT.map((i) => JUSTIFYCONTENT.map((j) => `${i}-${j}`)).flat(),
	];
	export const alignItem = _align;
	export const alignSelf = _align;
	export const display = [...DISPLAY, ...VIEWPORT.map((i) => DISPLAY.map((j) => `${i}-${j}`)).flat()];
	export const rowCol = [
		...ROWCOL,
		...ROWCOL.map((i) => `${i}`),
		...VIEWPORT.map((i) => ROWCOL.map((j) => `${i}-${j}`)).flat(),
	];

	export const visible = [true, false];
	export const textWrap = [true, false];
	export const fontItalic = [true, false];
	export const bgGradient = [true];
	export const textBreak = [true];
	export const monospace = [true];

	export const loadingPlaceholder = [true];
	export const loadingPlaceholderAnimation = ["glow", "wave"];
	export const loadingPlaceholderWeight = ["lg", "sm", "xs"];

	export const row = [true];
	export const col = [
		true,
		...ROWCOL,
		...ROWCOL.map((i) => `${i}`),
		...VIEWPORT,
		...VIEWPORT.map((i) => ROWCOL.map((j) => `${i}-${j}`)).flat(),
	];

	export const userSelect = ["all", "auto", "none"];
	export const pointerEvent = ["auto", "none"];
	export const position = ["static", "relative", "absolute", "fixed", "sticky"];
	export const overflow = ["auto", "hidden", "scroll", "visible"];
	export const overflowX = overflow;
	export const overflowY = overflow;

	export const textAlign = _positionView;
	export const verticalAlign = ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"];

	export const opacity = [...OPACITY, ...OPACITY.map((i) => `${i}`)];
	export const bgOpacity = [...BGOPACITY, ...BGOPACITY.map((i) => `${i}`)];
	export const textOpacity = [...TEXTOPACITY, ...TEXTOPACITY.map((i) => `${i}`)];

	export const focusRing = [true, ...COLOR];
	export const textBgColor = COLOR;
	export const textColor = [...COLOR, ...COLOREMPHASIS, ...BODYCOLOR, ...BODYTEXTCOLOR, ...OTHERCOLOR, "reset"];
	export const bgColor = [...COLOR, ...COLORSUBTLE, ...BODYCOLOR, ...OTHERCOLOR, "transparent"];

	export const iconLink = [true, "hover"];

	export const textTransform = ["lowercase", "uppercase", "capitalize"];
	export const textDecoration = ["underline", "line-through", "none"];
	export const lineHeight = [1, "1", "sm", "base", "lg"];

	export const fontSize = [...FONTSIZE, ...FONTSIZE.map((i) => `${i}`)];
	export const fontDisplay = fontSize;
	export const fontWeight = ["bold", "bolder", "semibold", "medium", "normal", "light", "lighter"];

	export const top = [...TOP, ...TOP.map((i) => `${i}`)];
	export const bottom = top;
	export const start = top;
	export const end = top;
	export const tMiddle = [true, "x", "y"];

	export const height = [...HEIGHT, ...HEIGHT.map((i) => `${i}`)];
	export const width = height;

	export const maxHeight = [100, "100"];
	export const maxWidth = [100, "100"];
	export const minViewHeight = [100, "100"];
	export const minViewWidth = [100, "100"];
	export const viewHeight = [100, "100"];
	export const viewWidth = [100, "100"];

	export const shadow = [true, false, "none", "sm", "lg", "inset"];

	export const borderNone = [true, "top", "end", "bottom", "start"];
	export const border = [false, ...borderNone];
	export const borderColor = [...COLOR, ...COLORSUBTLE, ...OTHERCOLOR];
	export const borderOpacity = [...BORDEROPACITY, ...BORDEROPACITY.map((i) => `${i}`)];
	export const borderWidth = [...BORDERWIDTH, ...BORDERWIDTH.map((i) => `${i}`)];

	export const roundedNone = border;
	export const rounded = [
		true,
		false,
		...ROUNDEDSIZE,
		...ROUNDEDSIZE.map((i) => `${i}`),
		...ROUNDED,
		...ROUNDEDSTYLE,
		...ROUNDED.map((i) => ROUNDEDSTYLE.map((j) => `${i}-${j}`)).flat(),
		...ROUNDED.map((i) => ROUNDEDSIZE.map((j) => `${i}-${j}`)).flat(),
		...ROUNDEDSTYLE.map((i) => ROUNDEDSIZE.map((j) => `${i}-${j}`)).flat(),
	];
	export const roundedSize = [...ROUNDEDSIZE, ...ROUNDEDSIZE.map((i) => `${i}`)];

	export const padding = _spacer;
	export const paddingX = _spacer;
	export const paddingY = _spacer;
	export const paddingTop = _spacer;
	export const paddingBottom = _spacer;
	export const paddingStart = _spacer;
	export const paddingEnd = _spacer;

	export const margin = _spacer;
	export const marginX = _spacer;
	export const marginY = _spacer;
	export const marginTop = _spacer;
	export const marginBottom = _spacer;
	export const marginStart = _spacer;
	export const marginEnd = _spacer;

	export const gap = _spacer;
	export const gutter = _spacer;
	export const gutterX = _spacer;
	export const gutterY = _spacer;

	export const print = display;
	export const container = [true, ...VIEWPORT, "fluid", "xs"];

	export const zIndex = [...ZINDEX, ...ZINDEX.map((i) => `${i}`)];
	export const objectFit = [...OBJECTFIT, ...VIEWPORT.map((i) => OBJECTFIT.map((j) => `${i}-${j}`)).flat()];

	export const ratio = [true, "1x1", "4x3", "16x9", "21x9"];
	export const fixed = STICKY;
	export const sticky = [...STICKY, ...VIEWPORT.map((i) => STICKY.map((j) => `${i}-${j}`)).flat()];

	export const clearfix = [true];
	export const textTruncate = [true];
	export const vstack = [true];
	export const hstack = [true];
	export const visually = ["hidden", "hidden-focusable"];
	export const h = fontDisplay;
	export const small = [true];

	//specific component only
	export const linkColor = [...COLOR, ...BODYTEXTCOLOR];
	export const linkUnderlineColor = linkColor;
	export const linkOffset = [...LINKOFFSET, ...LINKOFFSET.map((i) => `${i}`)];
	export const linkOffsetHover = linkOffset;
	export const linkOpacity = [...LINKOPACITY, ...LINKOPACITY.map((i) => `${i}`)];
	export const linkOpacityHover = linkOpacity;
	export const linkUnderline = [true];
	export const linkUnderlineOpacity = [...LINKUNDERLINEOPACITY, ...LINKUNDERLINEOPACITY.map((i) => `${i}`)];
	export const linkUnderlineOpacityHover = linkUnderlineOpacity;

	export const btnColor = COLOR;
	export const btnOutlineColor = COLOR;
	export const alertColor = COLOR;
	export const alertDismissible = [true];
	export const dropdownDirection = ["up", "start", "end"];
	export const dropdownMenuPositionView = _positionView;
}
