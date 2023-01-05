import { cookie } from "./cookie.js";
import { loadCSS } from "./loadCSS.js";

export interface IIconFn {
	(color: string, weight: string): {
		color?: string;
		weight?: string;
		icon: string;
	};
}

export interface IThemeChangeFn {
	(value: string | null): void;
}

export interface ISetting {
	title: string;
	icon: IIconFn | null;
	themechange: IThemeChangeFn | null;
	userchange: Function | null;
	term: Function | null;
	banner: Function | null;
	debug: boolean;
}

const _defaultIcon = (color: string, weight: string) => {
	return {
		color,
		weight,
		icon: "fire",
	};
};

const _setting: ISetting = {
	icon: _defaultIcon,
	title: "BS5.2 TS Builder",
	userchange: () => {},
	term: () => {},
	banner: () => {},
	themechange: (_value: string | null) => {},
	debug: true,
};

export const setting = {
	get DEBUG(): boolean {
		return _setting.debug;
	},
	set DEBUG(value: boolean) {
		_setting.debug = value;
	},
	get icon() {
		return _setting.icon;
	},
	set icon(fn: IIconFn | null) {
		_setting.icon = fn || _defaultIcon;
	},
	get title() {
		return _setting.title;
	},
	set title(title: string | null) {
		_setting.title = title || "BS5.2 TS Builder";
	},
	get userchange() {
		return _setting.userchange;
	},
	set userchange(fn: Function | null) {
		if (fn) {
			_setting.userchange = fn;
		} else {
			_setting.userchange = () => {};
		}
	},
	get term() {
		return _setting.term;
	},
	set term(fn: Function | null) {
		if (fn) {
			_setting.term = fn;
		} else {
			_setting.term = () => {};
		}
	},
	get banner() {
		return _setting.banner;
	},
	set banner(fn: Function | null) {
		if (fn) {
			_setting.banner = fn;
		} else {
			_setting.banner = () => {};
		}
	},
	get theme(): string | null {
		return cookie.get("theme");
	},
	set theme(value: string | null) {
		cookie.set("theme", value);

		let css_bootstrap = document.getElementById("css_bootstrap")!;
		let css_bootswatch = document.getElementById("css_bootswatch")!;

		if (css_bootstrap && css_bootswatch) {
			let url = value
				? `https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/${value}/bootstrap.min.css`
				: `https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/css/bootstrap.min.css`;

			loadCSS(url, () => {
				if (value) {
					css_bootswatch.setAttribute("href", url);
					css_bootswatch.removeAttribute("disabled");

					setTimeout(() => {
						css_bootstrap.setAttribute("disabled", "disabled");
					}, 300);
				} else {
					css_bootstrap.removeAttribute("disabled");
					setTimeout(() => {
						css_bootswatch.setAttribute("disabled", "disabled");
					}, 300);
				}

				if (typeof _setting.themechange === "function") {
					_setting.themechange(value);
				}
			});
		} else {
			console.error("#css_bootstrap and #css_bootswatch not found");
		}
	},
	get themechange() {
		return _setting.themechange;
	},
	set themechange(fn: IThemeChangeFn | null) {
		if (fn) {
			_setting.themechange = fn;
		} else {
			_setting.themechange = (_value: string | null) => {};
		}
	},
};
