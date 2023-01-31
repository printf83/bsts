// export namespace bootstrapLTBase {
// 	type base5 = 0 | 1 | 2 | 3 | 4 | 5;
// 	type base12 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
// 	type truefalse = true | false;
// 	type trueonly = true;
// 	type hundred = 100;

// 	type viewportPosition = "sm" | "md" | "lg" | "xl";
// 	type viewport = viewportPosition | "xxl";
// 	type baseFlex = "row" | "row-reverse" | "column" | "column-reverse" | "wrap" | "wrap-reverse" | "nowrap" | "fill" | "shrink-0" | "shrink-1" | "grow-0" | "grow-1";

// 	type baseFloat = "start" | "end" | "none";
// 	type baseOrder = "first" | base12 | "last";
// 	type baseAlign = "start" | "end" | "center" | "baseline" | "stretch";
// 	type baseAlignContent = "start" | "end" | "center" | "between" | "around" | "stretch";
// 	type baseJustifyContent = "start" | "end" | "center" | "between" | "around" | "evenly";
// 	type baseSpacer = "auto" | base5;
// 	type baseDisplay = "none" | "inline" | "inline-block" | "block" | "grid" | "table" | "table-cell" | "table-row" | "flex" | "inline-flex";
// 	type baseRowCol = "auto" | base12;
// 	type baseColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

// 	type baseUserSelect = "all" | "auto" | "none";
// 	type basePointerEvent = "auto" | "none";
// 	type basePosition = "static" | "relative";
// 	type baseOverflow = "auto" | "hidden" | "scroll";
// 	type baseVerticalAlign = "baseline" | "top" | "middle" | "bottom" | "text-top" | "text-bottom";
// 	type baseOpacity = 0 | 25 | 50 | 75 | 100;
// 	type baseBgOpacity = 10 | 25 | 50 | 75 | 100;
// 	type baseTextOpacity = 25 | 50 | 75 | 100;

// 	export type theme = "dark" | "light";

// 	export type grid = base12 | `${viewport}-${base12}`;
// 	export type flex = baseFlex | `${viewport}-${baseFlex}`;
// 	export type float = baseFloat | `${viewport}-${baseFloat}`;
// 	export type order = baseOrder | `${viewport}-${baseOrder}`;
// 	export type offset = grid;
// 	export type align = baseAlign | `${viewport}-${baseAlign}`;
// 	export type alignContent = baseAlignContent | `${viewport}-${baseAlignContent}`;
// 	export type justifyContent = baseJustifyContent | `${viewport}-${baseJustifyContent}`;
// 	export type alignItem = align;
// 	export type alignSelf = align;
// 	export type spacer = baseSpacer | `${viewport}-${baseSpacer}`;
// 	export type display = baseDisplay | `${viewport}-${baseDisplay}`;
// 	export type rowCol = baseRowCol | `${viewport}-${baseRowCol}`;
// 	export type color = baseColor;
// 	export type positionView = baseFloat | `${viewportPosition}-${baseFloat}`;
// 	export type visible = truefalse;
// 	export type textWrap = truefalse;
// 	export type fontItalic = truefalse;

// 	export type bgGradient = trueonly;
// 	export type wordBreak = trueonly;
// 	export type monospace = trueonly;
// 	export type placeholder = trueonly;

// 	export type row = truefalse;
// 	export type col = true | baseRowCol | `${viewport}-${baseRowCol}`;
// 	export type userSelect = baseUserSelect;
// 	export type pointerEvent = basePointerEvent;
// 	export type position = basePosition;
// 	export type overflow = baseOverflow;

// 	export type textAlign = positionView;
// 	export type verticalAlign = baseVerticalAlign;

// 	export type opacity = baseOpacity;
// 	export type bgOpacity = baseBgOpacity;
// 	export type textOpacity = baseTextOpacity;

// 	export type btnColor = color;
// 	export type btnOutlineColor = color;
// 	export type alertColor = color;

// 	export type textBgColor = color;
// 	export type textColor = color;
// 	export type linkColor = color;
// 	export type bgColor = color;

// 	export type textTransform = "lowercase" | "uppercase" | "capitalize";
// 	export type textDecoration = "underline" | "line-through" | "none";
// 	export type lineHeight = 1 | "sm" | "base" | "lg";

// 	export type fontSize = 1 | 2 | 3 | 4 | 5 | 6;
// 	export type fontDisplay = fontSize;
// 	export type fontWeight = "bold" | "bolder" | "normal" | "light" | "lighter";

// 	export type top = 0 | 50 | 100;
// 	export type bottom = top;
// 	export type start = top;
// 	export type end = top;
// 	export type tMiddle = true | "x" | "y";

// 	export type height = "auto" | 25 | 50 | 75 | 100;
// 	export type width = height;

// 	export type maxHeight = hundred;
// 	export type maxWidth = hundred;
// 	export type minViewHeight = hundred;
// 	export type minViewWidth = hundred;
// 	export type viewHeight = hundred;
// 	export type viewWidth = hundred;

// 	export type placeholderAnimation = "glow" | "wave";
// 	export type placeholderWeight = "lg" | "sm" | "xs";

// 	export type shadow = true | false | "none" | "sm" | "lg" | "inset";
// 	export type borderNone = true | "top" | "end" | "bottom" | "start";
// 	export type border = false | borderNone;

// 	export type borderColor = color;
// 	export type borderOpacity = 10 | 25 | 50 | 75;
// 	export type borderWidth = base5;
// 	export type roundedNone = border;
// 	export type rounded = roundedNone | "circle" | "pill";
// 	export type roundedSize = base5;

// 	export type padding = spacer;
// 	export type paddingX = spacer;
// 	export type paddingY = spacer;
// 	export type paddingTop = spacer;
// 	export type paddingBottom = spacer;
// 	export type paddingStart = spacer;
// 	export type paddingEnd = spacer;

// 	export type margin = spacer;
// 	export type marginX = spacer;
// 	export type marginY = spacer;
// 	export type marginTop = spacer;
// 	export type marginBottom = spacer;
// 	export type marginStart = spacer;
// 	export type marginEnd = spacer;

// 	export type gap = spacer;
// 	export type gutter = spacer;
// 	export type gutterX = spacer;
// 	export type gutterY = spacer;

// 	export type print = display;
// 	export type container = true | "xs" | viewport | "fluid";
// }

// export interface IBootstrapAttachRule<T> {
// 	format?: string;
// 	value?: T;
// 	formatValue?: string;
// 	formatTrue?: string;
// 	formatFalse?: string;
// 	shared?: boolean;
// }

// export class bootstrapAttachRule<T> implements IBootstrapAttachRule<T> {
// 	constructor(public format?: string, public value?: T, public formatValue?: string, public formatTrue?: string, public formatFalse?: string, public shared: boolean = false) {}
// }

// export interface bootstrapRuleDB<T> {
// 	[key: string]: bootstrapAttachRule<T>;
// }

// export const isBootstrapType = (value: string | number | boolean, type: any[]): boolean => {
// 	let listOfPossible = type.concat();
// 	if (listOfPossible && listOfPossible.length > 0) {
// 		return listOfPossible.includes(value);
// 	}
// 	return false;
// };

//TESTING
// type viewport = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
// type base12 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// type Add<vp extends viewport, b12 extends base12[]> = {
// 	[Index in keyof b12]: `${vp}${b12[Index]}`;
// };

// type Compute<Clrs extends viewport[], Names extends Array<base12>, Acc extends string[] = []> = Clrs extends [] ? Acc : Clrs extends [infer Head extends viewport, ...infer Rest extends Array<viewport>] ? Compute<Rest, Names, [...Acc, ...Add<Head, Names>]> : Acc;

// function applyColor<TViewPort extends viewport, TViewPorts extends TViewPort[]>(vp: [...TViewPorts]) {
// 	return <baseKey extends base12, baseKeyMaps extends baseKey[]>(baseKeyMap: [...baseKeyMaps]) => vp.flatMap((vpi) => baseKeyMap.map((v): `${TViewPorts[number]}${baseKey}` => `${vpi}${v}`));
// }
