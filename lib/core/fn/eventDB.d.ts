export declare const eventDB: {
    create: (fn: Function) => string;
    call: (id: string) => Function;
    remove: (sender: HTMLElement) => void;
};
