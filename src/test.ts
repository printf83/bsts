import { tag, core } from "./index";

console.log(core.UUID());
console.log(core.UUID());

let res = core.html([{ tag: "h1", elem: null }]);
console.log(res);
