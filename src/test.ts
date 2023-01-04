import { tag } from "./core/base/base.interface.js";
import { core,span } from "./index.js";

console.log(core.UUID());
console.log(core.UUID());

let body = document.getElementById("main") as HTMLElement;

core.appendChild(body, new tag("h1", [
    new tag("span", "hello"),
    new tag("span", " world!")
], { id: "test" }));

core.appendChild(body, new tag("h2", [
    new span("hello"),
    new span(" world", { textColor: "primary" })
]));
