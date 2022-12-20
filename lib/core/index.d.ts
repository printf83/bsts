import { capitalize } from "./capitalize.js";
import { codemarker } from "./codemarker.js";
import { detachEventListener } from "./detachEventListener.js";
import { getcssvar } from "./getcssvar.js";
import { isdarkcolor } from "./isdarkcolor.js";
import { loadcss } from "./loadcss.js";
import { randomdb } from "./randomdb.js";
import { rnd } from "./rnd.js";
import { shufflearray } from "./shufflearray.js";
import { UUID } from "./uuid.js";
export declare const core: {
    capitalize: typeof capitalize;
    codemarker: typeof codemarker;
    cookie: {
        set: (name: string, value: string, expiredDays?: number) => void;
        get: (name: string) => string;
    };
    detachEventListener: typeof detachEventListener;
    getcssvar: typeof getcssvar;
    isdarkcolor: typeof isdarkcolor;
    loadcss: typeof loadcss;
    randomdb: typeof randomdb;
    rnd: typeof rnd;
    shufflearray: typeof shufflearray;
    UUID: typeof UUID;
};
