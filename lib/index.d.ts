import { msg } from './test/msg';
import { msg2 } from './test2/msg2';
declare const _default: {
    msg: typeof msg;
    msg2: typeof msg2;
    core: {
        capitalize: typeof import("./core/capitalize").capitalize;
        codemarker: typeof import("./core/codemarker").codemarker;
        cookie: {
            set: (name: string, value: string, expiredDays?: number) => void;
            get: (name: string) => string;
        };
        detachEventListener: typeof import("./core/detachEventListener").detachEventListener;
        getcssvar: typeof import("./core/getcssvar").getcssvar;
        isdarkcolor: typeof import("./core/isdarkcolor").isdarkcolor;
        loadcss: typeof import("./core/loadcss").loadcss;
        randomdb: typeof import("./core/randomdb").randomdb;
        rnd: typeof import("./core/rnd").rnd;
        shufflearray: typeof import("./core/shufflearray").shufflearray;
        UUID: typeof import("./core/uuid").UUID;
    };
    tag: {
        tag: typeof import("./tag/tag").tag;
    };
};
export default _default;
