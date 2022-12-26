export declare const core: {
    capitalize: (str: string) => string;
    codeMarker: (container: HTMLElement) => void;
    cookie: {
        set: (name: string, value: string, expiredDays?: number) => void;
        get: (name: string) => string;
    };
    detachEventListener: (elem: ChildNode) => void;
    getBaseIcon: (icon: string) => import("./fn/getBaseIcon.js").IIcon;
    getCSSVar: (name: string) => string;
    isColorDark: (color: string) => boolean;
    loadCSS: (url: string, callback?: Function) => void;
    num2En: (num: number) => string;
    num2EnTh: (num: number) => string;
    randomDB: <T>(name: string, arr: T[]) => T;
    rnd: (max: number, min?: number) => number;
    setting: {
        DEBUG: boolean;
        icon: import("./fn/setting.js").IIconFn;
        title: string;
        userchange: Function;
        term: Function;
        banner: Function;
        theme: string;
        themechange: import("./fn/setting.js").IThemeChangeFn;
    };
    shuffleArray: <T_1>(arr: T_1[]) => T_1[];
    UUID: (format?: string) => string;
    spacer: 0 | "auto" | 1 | 2 | 3 | 4 | 5 | "sm-0" | "sm-auto" | "sm-1" | "sm-2" | "sm-3" | "sm-4" | "sm-5" | "md-0" | "md-auto" | "md-1" | "md-2" | "md-3" | "md-4" | "md-5" | "lg-0" | "lg-auto" | "lg-1" | "lg-2" | "lg-3" | "lg-4" | "lg-5" | "xl-0" | "xl-auto" | "xl-1" | "xl-2" | "xl-3" | "xl-4" | "xl-5" | "xxl-0" | "xxl-auto" | "xxl-1" | "xxl-2" | "xxl-3" | "xxl-4" | "xxl-5";
};
