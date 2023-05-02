# bsts

Maybe this is the stupid way to generate HTML, but, this is the way I learn. 
This library is just to create bootstrap 5.3 HTML but in TS way.

example :

```
import {core, b, h} from "@printf83/bsts";

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, new h.div([
        new h.p("This is example p tag"),
        new h.p({lead:true,data:{test:"test-data"}},"This is example p tag with attribute"),
        new b.button({id:"btn1",color:"primary"},"Button"),
    ]));
});
```


or without new keyword:


```
import {core, b, h} from "@printf83/bsts";

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, h.Div([
        h.P("This is example p tag"),
        h.P({lead:true,data:{test:"test-data"}},"This is example p tag with attribute"),
        b.Button({id:"btn1",color:"primary"},"Button"),
    ]));
});
```

Check [bsts testing website](https://printf83.github.io/bsts-test/) or [github](https://github.com/printf83/bsts-test) for more example code
