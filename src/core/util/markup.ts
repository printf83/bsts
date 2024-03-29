import { a } from "../../html/a.js";
import { strong } from "../../html/strong.js";
import { b } from "../../html/b.js";
import { code } from "../../html/code.js";
import { br } from "../../html/br.js";
import { hr } from "../../html/hr.js";
import { i } from "../../html/i.js";
import { kbd } from "../../html/kbd.js";
import { span } from "../../html/span.js";
import { u } from "../../html/u.js";
import { del } from "../../html/del.js";
import { mark } from "../../html/mark.js";
import { tag } from "../tag.js";

/**
 * Parses a markup string containing formatting tags and returns the corresponding HTML elements.
 * Accepts a string of formatting tags (b, u, i, etc) and a content string.
 * Loops through the tags, creating the appropriate HTML elements for each.
 * Escapes the content string for security.
 * Returns null if the tag string is invalid.
 */
function markupCode(k: string, str: string) {
	if (k.match(/^[buickdms]*$/gm)) {
		let res: tag | null = null;
		let ks = k.split("");
		let ksl = ks.length - 1;
		str = escapeMarkup(str);

		ks.forEach((x, ix) => {
			switch (x) {
				case "d":
					if (res === null) {
						res = new del(ix === ksl ? str : "");
					} else {
						res.elem = new del(ix === ksl ? str : "");
					}
					break;
				case "m":
					if (res === null) {
						res = new mark(ix === ksl ? str : "");
					} else {
						res.elem = new mark(ix === ksl ? str : "");
					}
					break;
				case "s":
					if (res === null) {
						res = new strong(ix === ksl ? str : "");
					} else {
						res.elem = new strong(ix === ksl ? str : "");
					}
					break;
				case "b":
					if (res === null) {
						res = new b(ix === ksl ? str : "");
					} else {
						res.elem = new b(ix === ksl ? str : "");
					}
					break;
				case "u":
					if (res === null) {
						res = new u(ix === ksl ? str : "");
					} else {
						res.elem = new u(ix === ksl ? str : "");
					}
					break;
				case "i":
					if (res === null) {
						res = new i(ix === ksl ? str : "");
					} else {
						res.elem = new i(ix === ksl ? str : "");
					}
					break;
				case "k":
					if (res === null) {
						res = new kbd(ix === ksl ? str : "");
					} else {
						res.elem = new kbd(ix === ksl ? str : "");
					}
					break;
				case "c":
					if (res === null) {
						res = new code(ix === ksl ? str : "");
					} else {
						res.elem = new code(ix === ksl ? str : "");
					}
					break;
				default:
					if (res === null) {
						res = new span(ix === ksl ? str : "");
					} else {
						res.elem = new span(ix === ksl ? str : "");
					}
			}
		});

		return res;
	}

	return null;
}

/**
 * Escapes special markup characters in a string to prevent them from being interpreted.
 *
 * Replaces:
 * - `{` with `/{\`
 * - `}` with `}/`
 * - `:` with `/:`
 *
 * This allows using `{{}}` markup without it being parsed.
 *
 * @param str - The string to escape.
 * @returns The escaped string.
 */
function escapeMarkup(str: string) {
	return str.replace(/\/{\//g, "{").replace(/\/}\//g, "}").replace(/\/:\//g, ":");
}

/**
 * Parses a string for custom markup syntax and converts it into DOM elements.
 *
 * Looks for `{{}}` tags in the string and parses them into different DOM elements based on the syntax:
 *
 * - `{{br}}` converts to a <br> element.
 * - `{{hr}}` converts to a <hr> element.
 * - `{{nav:path}}` converts to an <a> element for internal navigation.
 * - `{{url::text}}` converts to an <a> element linking to the url.
 * - Otherwise, converts to a <code> element with the inner text.
 *
 * Escapes any `{` `}` `:` characters to prevent them being parsed as markup.
 *
 * Returns an array of DOM elements and plain text strings.
 */
export const markup = (str: string) => {
	let reg = /\{\{(.*?)}\}/gm;
	if (str.match(reg)) {
		let matchResult: RegExpExecArray | null;
		let result: string[] = [];
		let lastIndex: number = 0;

		while ((matchResult = reg.exec(str)) !== null) {
			result.push(str.slice(lastIndex, matchResult.index));
			result.push(str.slice(matchResult.index, reg.lastIndex));
			lastIndex = reg.lastIndex;
		}

		result.push(str.slice(lastIndex));

		return result.map((s) => {
			if (s.startsWith("{{")) {
				let c = s.indexOf("::");
				if (c > 0) {
					let d = s.slice(2, c);
					let e = s.slice(c + 2, s.length - 2);

					let m = markupCode(d, e);
					if (m) {
						return m;
					} else {
						if (d.startsWith("nav:")) {
							return new a(
								{
									href: "#",
									on: {
										click: () => {
											document.dispatchEvent(
												new CustomEvent("bs.navigate", { detail: d.slice(4) })
											);
										},
									},
								},
								escapeMarkup(e)
							);
						} else {
							return new a({ href: d, target: "_blank" }, escapeMarkup(e));
						}
					}
				} else {
					switch (s) {
						case "{{br}}":
							return new br();
						case "{{hr}}":
							return new hr();
						default:
							return new code(escapeMarkup(s.slice(2, -2)));
					}
				}
			} else {
				return s;
			}
		});
	} else {
		return str;
	}
};
