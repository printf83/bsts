export declare const eventdb: {
    create: (fn: Function) => string;
    call: (id: string) => Function;
    remove: (sender: HTMLElement) => void;
};
