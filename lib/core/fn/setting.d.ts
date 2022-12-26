export interface IIconFn {
    (color: string, weight: string): {
        color?: string;
        weight?: string;
        icon: string;
    };
}
export interface IThemeChangeFn {
    (value: string): void;
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
export declare const setting: {
    DEBUG: boolean;
    icon: IIconFn;
    title: string;
    userchange: Function;
    term: Function;
    banner: Function;
    theme: string;
    themechange: IThemeChangeFn;
};
