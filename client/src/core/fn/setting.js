import { cookie } from "./cookie.js";
import { loadCSS } from "./loadCSS.js";
const _defaultIcon = (color, weight) => {
    return {
        color,
        weight,
        icon: "fire",
    };
};
const _setting = {
    icon: _defaultIcon,
    title: "BS5.2 TS Builder",
    userchange: () => { },
    term: () => { },
    banner: () => { },
    themechange: (_value) => { },
    debug: false,
};
export const setting = {
    get DEBUG() {
        return _setting.debug;
    },
    set DEBUG(value) {
        _setting.debug = value;
    },
    get icon() {
        return _setting.icon;
    },
    set icon(fn) {
        _setting.icon = fn || _defaultIcon;
    },
    get title() {
        return _setting.title;
    },
    set title(title) {
        _setting.title = title || "BS5.2 TS Builder";
    },
    get userchange() {
        return _setting.userchange;
    },
    set userchange(fn) {
        if (fn) {
            _setting.userchange = fn;
        }
        else {
            _setting.userchange = () => { };
        }
    },
    get term() {
        return _setting.term;
    },
    set term(fn) {
        if (fn) {
            _setting.term = fn;
        }
        else {
            _setting.term = () => { };
        }
    },
    get banner() {
        return _setting.banner;
    },
    set banner(fn) {
        if (fn) {
            _setting.banner = fn;
        }
        else {
            _setting.banner = () => { };
        }
    },
    get theme() {
        return cookie.get("theme");
    },
    set theme(value) {
        cookie.set("theme", value);
        let css_bootstrap = document.getElementById("css_bootstrap");
        let css_bootswatch = document.getElementById("css_bootswatch");
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
                }
                else {
                    css_bootstrap.removeAttribute("disabled");
                    setTimeout(() => {
                        css_bootswatch.setAttribute("disabled", "disabled");
                    }, 300);
                }
                if (typeof _setting.themechange === "function") {
                    _setting.themechange(value);
                }
            });
        }
        else {
            console.error("#css_bootstrap and #css_bootswatch not found");
        }
    },
    get themechange() {
        return _setting.themechange;
    },
    set themechange(fn) {
        if (fn) {
            _setting.themechange = fn;
        }
        else {
            _setting.themechange = (_value) => { };
        }
    },
};
