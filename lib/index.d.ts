declare const _default: {
    core: {
        addIntoClassList: (elem: HTMLElement, value: string | string[]) => HTMLElement;
        camel2Dash: (value: string) => string;
        capitalize: (str: string) => string;
        codeMarker: (container: HTMLElement) => void;
        combineArray: <T>(arr: T[], delimeter: string) => string;
        cookie: {
            set: (name: string, value: string, expiredDays?: number) => void;
            get: (name: string) => string;
        };
        dash2Camel: (value: string) => string;
        deleteEventListener: (name: string, elem: HTMLElement, callback: Function) => void;
        detachEventListener: (elem: ChildNode) => void;
        elemInfo: (elem: HTMLElement) => string;
        eventDB: {
            create: (fn: Function) => string;
            call: (id: string) => Function;
            remove: (sender: HTMLElement) => void;
        };
        extend: (x: object, y?: object) => object;
        genClassList: (value: string | string[]) => string[];
        getBaseIcon: (icon: string) => import("./core/fn/getBaseIcon.js").IIcon;
        getCSSVar: (name: string) => string;
        importJS: typeof import("./core/fn/importJS.js").importJS;
        importJSPromise: typeof import("./core/fn/importJSPromise.js").importJSPromise;
        isColorDark: (color: string) => boolean;
        isHTML: (str: string) => boolean;
        isTypeOf: <T_1>(obj: any) => boolean;
        loadCSS: (url: string, callback?: Function) => void;
        mergeClass: (existingClass: string | string[], newClass: string | string[]) => string | string[];
        mergeObject: (existingObject: object, newObject: object) => {};
        mergeStyle: (existingStyle: object, newStyle: object) => {};
        multiClass: (value: string | number | boolean, rules: import("./core/base/attachBootstrap.js").bs.rule) => string[];
        multipleConstructorClass: (rules: import("./core/fn/multipleConstructorClass.js").IMultipleConstructor[], caller: string, obj: any[]) => any;
        num2En: (num: number) => string;
        num2EnTh: (num: number) => string;
        randomDB: <T_2>(name: string, arr: T_2[]) => T_2;
        removeChildElement: (elem: HTMLElement) => void;
        removeElement: (elem: HTMLElement) => void;
        removeEmptyArray: <T_3>(arr: T_3[]) => T_3[];
        rnd: (max: number, min?: number) => number;
        setting: {
            DEBUG: boolean;
            icon: import("./core/fn/setting.js").IIconFn;
            title: string;
            userchange: Function;
            term: Function;
            banner: Function;
            theme: string;
            themechange: import("./core/fn/setting.js").IThemeChangeFn;
        };
        setupEventListenerRemover: (name: string, elem: HTMLElement, fn: Function) => void;
        shuffleArray: <T_4>(arr: T_4[]) => T_4[];
        UUID: (format?: string) => string;
        attachAttr: (elem: HTMLElement, opt: object) => HTMLElement;
        html: (arg: string | import("./core/base/base.interface.js").IBase | (string | import("./core/base/base.interface.js").IBase)[]) => string;
        build: (container: HTMLElement, arg: string | import("./core/base/base.interface.js").IBase | (string | import("./core/base/base.interface.js").IBase)[], append?: boolean, pos?: HTMLElement) => HTMLElement;
        appendChild: (container: HTMLElement, arg: string | import("./core/base/base.interface.js").IBase | (string | import("./core/base/base.interface.js").IBase)[]) => HTMLElement;
        prependChild: (container: HTMLElement, arg: string | import("./core/base/base.interface.js").IBase | (string | import("./core/base/base.interface.js").IBase)[]) => HTMLElement;
        replaceChild: (container: HTMLElement, arg: string | import("./core/base/base.interface.js").IBase | (string | import("./core/base/base.interface.js").IBase)[]) => HTMLElement;
        replaceWith: (elem: HTMLElement, arg: string | import("./core/base/base.interface.js").IBase | (string | import("./core/base/base.interface.js").IBase)[]) => HTMLElement;
    };
    tag: {
        tag: typeof import("./tag/tag.js").tag;
    };
};
export default _default;
