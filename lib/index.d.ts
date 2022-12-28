import { msg } from './test/msg';
import { msg2 } from './test2/msg2';
import { core } from './core/index.js';
declare const _default: {
    msg: typeof msg;
    msg2: typeof msg2;
    core: typeof core;
    tag: {
        tag: typeof import("./tag/tag").tag;
    };
};
export default _default;
