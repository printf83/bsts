import { camel2Dash } from "../fn/camel2Dash.js";
import { dash2Camel } from "../fn/dash2Camel.js";
import { attachFn } from "./index.js";

const db = [
	"alignContent",
	"alignItems",
	"alignSelf",
	"animation",
	"animationDelay",
	"animationDirection",
	"animationDuration",
	"animationFillMode",
	"animationIterationCount",
	"animationName",
	"animationTimingFunction",
	"animationPlayState",
	"background",
	"backgroundAttachment",
	"backgroundColor",
	"backgroundImage",
	"backgroundPosition",
	"backgroundRepeat",
	"backgroundClip",
	"backgroundOrigin",
	"backgroundSize",
	"backfaceVisibility",
	"border",
	"borderBottom",
	"borderBottomColor",
	"borderBottomLeftRadius",
	"borderBottomRightRadius",
	"borderBottomStyle",
	"borderBottomWidth",
	"borderCollapse",
	"borderColor",
	"borderImage",
	"borderImageOutset",
	"borderImageRepeat",
	"borderImageSlice",
	"borderImageSource",
	"borderImageWidth",
	"borderLeft",
	"borderLeftColor",
	"borderLeftStyle",
	"borderLeftWidth",
	"borderRadius",
	"borderRight",
	"borderRightColor",
	"borderRightStyle",
	"borderRightWidth",
	"borderSpacing",
	"borderStyle",
	"borderTop",
	"borderTopColor",
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderTopStyle",
	"borderTopWidth",
	"borderWidth",
	"bottom",
	"boxDecorationBreak",
	"boxShadow",
	"boxSizing",
	"captionSide",
	"caretColor",
	"clear",
	"clip",
	"color",
	"columnCount",
	"columnFill",
	"columnGap",
	"columnRule",
	"columnRuleColor",
	"columnRuleStyle",
	"columnRuleWidth",
	"columns",
	"columnSpan",
	"columnWidth",
	"content",
	"counterIncrement",
	"counterReset",
	"cursor",
	"direction",
	"display",
	"emptyCells",
	"filter",
	"flex",
	"flexBasis",
	"flexDirection",
	"flexFlow",
	"flexGrow",
	"flexShrink",
	"flexWrap",
	"cssFloat",
	"font",
	"fontFamily",
	"fontSize",
	"fontStyle",
	"fontVariant",
	"fontWeight",
	"fontSizeAdjust",
	"fontStretch",
	"hangingPunctuation",
	"height",
	"hyphens",
	"icon",
	"imageOrientation",
	"isolation",
	"justifyContent",
	"left",
	"letterSpacing",
	"lineHeight",
	"listStyle",
	"listStyleImage",
	"listStylePosition",
	"listStyleType",
	"margin",
	"marginBottom",
	"marginLeft",
	"marginRight",
	"marginTop",
	"maxHeight",
	"maxWidth",
	"minHeight",
	"minWidth",
	"navDown",
	"navIndex",
	"navLeft",
	"navRight",
	"navUp",
	"objectFit",
	"objectPosition",
	"opacity",
	"order",
	"orphans",
	"outline",
	"outlineColor",
	"outlineOffset",
	"outlineStyle",
	"outlineWidth",
	"overflow",
	"overflowX",
	"overflowY",
	"padding",
	"paddingBottom",
	"paddingLeft",
	"paddingRight",
	"paddingTop",
	"pageBreakAfter",
	"pageBreakBefore",
	"pageBreakInside",
	"perspective",
	"perspectiveOrigin",
	"position",
	"quotes",
	"resize",
	"right",
	"scrollBehavior",
	"tableLayout",
	"tabSize",
	"textAlign",
	"textAlignLast",
	"textDecoration",
	"textDecorationColor",
	"textDecorationLine",
	"textDecorationStyle",
	"textIndent",
	"textJustify",
	"textOverflow",
	"textShadow",
	"textTransform",
	"top",
	"transform",
	"transformOrigin",
	"transformStyle",
	"transition",
	"transitionProperty",
	"transitionDuration",
	"transitionTimingFunction",
	"transitionDelay",
	"unicodeBidi",
	"userSelect",
	"verticalAlign",
	"visibility",
	"whiteSpace",
	"width",
	"wordBreak",
	"wordSpacing",
	"wordWrap",
	"widows",
	"zIndex",
];

let allowProp = [];

const allow = (key: string): string | null => {
	if (allowProp.length === 0) {
		let t = db;
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
};

export const attachStyle: attachFn = (key, elem, attr) => {
	let a_key = allow(key);

	if (a_key !== null) {
		elem.style[a_key] = attr[key];
		delete attr[key];
	}

	return { attr, elem };
};
