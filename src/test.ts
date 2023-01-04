import { IBase } from './../lib/core/base/base.interface.d';
import { tag, core } from "./index.js";

console.log(core.UUID());
console.log(core.UUID());

let j1: IBase = { tag: "span", elem: "hello world 1", id: "test" }
let j2: IBase = { tag: "span", elem: "hello world 2", bgColor:"primary" }

let i: IBase[] = [j1,j2]
let h:IBase = {
    tag: "h1",
    bgColor:"danger",
    elem: i
}
let arg = [h];

let body = document.getElementsByTagName("body")[0] as HTMLElement;
core.appendChild(body, arg);
