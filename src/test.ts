import { tag, core } from "./index.js";

console.log(core.UUID());
console.log(core.UUID());

let res = core.html([{ tag: "h1", elem: "Hello World" }]);
console.log(res);
