# bsts

Maybe this is the stupid way to generate HTML, but, this is the way I learn. 
This library is just to create bootstrap 5.3 HTML but in TS way.

example button :

```
import {core, b, h} from "@printf83/bsts"

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, new h.div([
        new b.button({id:"button1",color:"primary"},"Button");
    ]));
});
```

Check [test.ts](https://github.com/printf83/bsts/tree/master/src/test.ts) on my [github](https://github.com/printf83/bsts) for more example code
