import { core } from "./lib/index.js";

console.log(core.UUID());
console.log(core.UUID());

let body = document.getElementsByTagName("BODY");
core.appendChild(body[0], [{ tag: "h1", elem: "hello world" }]);

