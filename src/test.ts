import { core,div,h,span,tag } from "./index.js";

// console.log(core.UUID());
// console.log(core.UUID());

let body = document.getElementById("main") as HTMLElement;

// core.replaceChild(body, new tag("h1", [
//     new tag("span", "hello"),
//     new tag("span", " world!")
// ], { id: "test" }));

// core.replaceChild(body, new tag("h2", [
//     new span("hello"),
//     new span(" world", { textColor: "primary" })
// ]));

// core.replaceChild(body, new div([
//     new div("1", { col: 4 }),
//     new div("2", { col: 4 }),
//     new div("3", { col: 4 }),
// ],{row:true}))

core.replaceChild(body, [
    new div([
        new div([
            new h(1, "1", {
                col: 4, textColor: "danger", click: (e: Event) => {
                    alert("click");
            } }),
            new h(2,"2", { col: 4,textColor:"primary" }),
            new h(3,"3", { col: 4,textColor:"success" }),
        ],{row:true, height:"350px"})  
    ],{container:true} )
])
