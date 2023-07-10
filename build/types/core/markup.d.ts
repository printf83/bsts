import { a } from "../html/a.js";
import { code } from "../html/code.js";
import { br } from "../html/br.js";
import { hr } from "../html/hr.js";
export declare const markup: (str: string) => string | (string | a | code | br | hr)[];
