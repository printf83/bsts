const e={set:(e,t,r=7)=>{let n=new Date;r=t?r:-1,n.setTime(n.getTime()+24*r*60*60*1e3),document.cookie=`${e}=${t};expires=${n.toUTCString()};samesite=strict;path=/`},get:e=>{e=`${e}=`;let t=decodeURIComponent(document.cookie).split(";");for(let r=0;r<t.length;r++){let n=t[r];for(;" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return null}},t=e=>{let r=null==e?void 0:e.childNodes;(null==r?void 0:r.length)>0&&r.forEach(e=>{t(e),"function"==typeof e.detachEventListener&&Object.keys(e.detachEventListener).forEach(t=>{e.detachEventListener[t]()})})},r={i:{icon:"info-circle",type:"fas",color:"primary"},"!":{icon:"exclamation-triangle",type:"fas",color:"warning"},"!!":{icon:"exclamation-triangle",type:"fas",color:"danger"},"?":{icon:"question-circle",type:"fas",color:"success"},"/":{icon:"check-circle",type:"fas",color:"success"},x:{icon:"times-circle",type:"fas",color:"danger"},"-":{icon:"minus-circle",type:"fas",color:"danger"}},n=(e="el_xxxxxxxxxxxx")=>e.replace(/[xy]/g,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),s=(e,r)=>{let s=document.getElementsByTagName("head")[0],l=document.createElement("link"),a=n();l.id=a,l.type="text/css",l.rel="stylesheet",l.onload=()=>{let e=document.getElementById(a);e&&(t(e),e.remove()),"function"==typeof r&&r()},l.href=e,s.appendChild(l)},l=[{value:1e15,str:"quadrillion"},{value:1e12,str:"trillion"},{value:1e9,str:"billion"},{value:1e6,str:"million"},{value:1e3,str:"thousand"},{value:100,str:"hundred"},{value:90,str:"ninety"},{value:80,str:"eighty"},{value:70,str:"seventy"},{value:60,str:"sixty"},{value:50,str:"fifty"},{value:40,str:"forty"},{value:30,str:"thirty"},{value:20,str:"twenty"},{value:19,str:"nineteen"},{value:18,str:"eighteen"},{value:17,str:"seventeen"},{value:16,str:"sixteen"},{value:15,str:"fifteen"},{value:14,str:"fourteen"},{value:13,str:"thirteen"},{value:12,str:"twelve"},{value:11,str:"eleven"},{value:10,str:"ten"},{value:9,str:"nine"},{value:8,str:"eight"},{value:7,str:"seven"},{value:6,str:"six"},{value:5,str:"five"},{value:4,str:"four"},{value:3,str:"three"},{value:2,str:"two"},{value:1,str:"one"}],a=e=>{let t="";for(let r of l)if(e>=r.value){if(!(e<=99)){let t=Math.floor(e/r.value),n=e%r.value;return n>0?`${a(t)} ${r.str} ${a(n)}`:`${a(t)} ${r.str}`}t+=r.str,(e-=r.value)>0&&(t+=" ")}return t},o=[{value:1e15,str:"quadrillion"},{value:1e12,str:"trillion"},{value:1e9,str:"billion"},{value:1e6,str:"million"},{value:1e3,str:"thousand"},{value:100,str:"hundred"},{value:90,str:"ninet"},{value:80,str:"eight"},{value:70,str:"sevent"},{value:60,str:"sixt"},{value:50,str:"fift"},{value:40,str:"fourt"},{value:30,str:"thirt"},{value:20,str:"twent"},{value:19,str:"nineteenth"},{value:18,str:"eighteenth"},{value:17,str:"seventeenth"},{value:16,str:"sixteenth"},{value:15,str:"fifteenth"},{value:14,str:"fourteenth"},{value:13,str:"thirteenth"},{value:12,str:"twelvth"},{value:11,str:"eleventh"},{value:10,str:"tenth"},{value:9,str:"ninth"},{value:8,str:"eighth"},{value:7,str:"seventh"},{value:6,str:"sixth"},{value:5,str:"fifth"},{value:4,str:"fourth"},{value:3,str:"third"},{value:2,str:"second"},{value:1,str:"first"}],i=e=>{let t="";for(let r of o)if(e>=r.value){if(!(e<=99)){let t=Math.floor(e/r.value),n=e%r.value;return n>0?`${i(t)}-${r.str}-${i(n)}`:`${i(t)}-${r.str}`}t+=r.str,(e-=r.value)>0&&(t+=" ")}return t},u=e=>{for(let t=e.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},c={},h=(e,t)=>{let r=t.length;if(c[e]||(c[e]={x:0}),0===c[e].x)if(c[e].i){let n=c[e].i[r-1];c[e].i=u(t),n===c[e].i[0]&&(c[e].i[0]=c[e].i[r-1],c[e].i[r-1]=n)}else c[e].i=u(t);return c[e].x+1>=r?(c[e].x=0,h(e,t)):(c[e].x+=1,t[c[e].i[c[e].x-1]])},v=(e,t)=>({color:e,weight:t,icon:"fire"}),d={icon:v,title:"BS5.2 TS Builder",userchange:()=>{},term:()=>{},banner:()=>{},themechange:e=>{},debug:!1},g={get DEBUG(){return d.debug},set DEBUG(e){d.debug=e},get icon(){return d.icon},set icon(e){d.icon=e||v},get title(){return d.title},set title(e){d.title=e||"BS5.2 TS Builder"},get userchange(){return d.userchange},set userchange(e){d.userchange=e||(()=>{})},get term(){return d.term},set term(e){d.term=e||(()=>{})},get banner(){return d.banner},set banner(e){d.banner=e||(()=>{})},get theme(){return e.get("theme")},set theme(t){e.set("theme",t);let r=document.getElementById("css_bootstrap"),n=document.getElementById("css_bootswatch");if(r&&n){let e=t?`https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/${t}/bootstrap.min.css`:"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/css/bootstrap.min.css";s(e,()=>{t?(n.setAttribute("href",e),n.removeAttribute("disabled"),setTimeout(()=>{r.setAttribute("disabled","disabled")},300)):(r.removeAttribute("disabled"),setTimeout(()=>{n.setAttribute("disabled","disabled")},300)),d.themechange(t)})}else console.error("#css_bootstrap and #css_bootswatch not found")},get themechange(){return d.themechange},set themechange(e){d.themechange=e||(e=>{})}};var m={msg:function(e){console.log(`msg : ${e}`)},msg2:function(e){console.log(`msg2 : ${e}`)},core:{capitalize:e=>e.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g,e=>e.toUpperCase()),codeMarker:e=>{let t=e.getElementsByClassName("com");t&&t.length>0&&Array.prototype.forEach.call(t,e=>{"/*marker*/"===e.innerText?e.innerHTML='<span class="nocode marker inline"></span>':""===e.innerText?e.innerHTML='<span class="nocode marker inline-end"></span>':"//marker"===e.innerText?e.innerHTML='<span class="nocode marker downline"></span>':"//-"===e.innerText&&(e.innerHTML='<span class="nocode marker downline-end"></span>')})},cookie:e,detachEventListener:t,getBaseIcon:e=>r.hasOwnProperty(e)?r[e]:null,getCSSVar:e=>{let t=getComputedStyle(document.body),r=t.getPropertyValue(`--bs-${e}-rgb`);return r?`rgb(${r})`:t.getPropertyValue(`--bs-${e}`)||(console.error(`Css var --bs-${e} or --bs-${e}-rgb not found`),null)},isColorDark:e=>{if(!e)return!1;let t,r,n;if(e.match(/^rgb/)){let s=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);t=Number(s[1]),r=Number(s[2]),n=Number(s[3])}else{let s=+("0x"+e.slice(1).replace(e.length<5&&/./g,"$&$&"));t=s>>16,r=s>>8&255,n=255&s}return.2126*t+.7152*r+.0722*n<48},loadCSS:s,num2En:a,num2EnTh:i,randomDB:h,rnd:(e,t=0)=>(e=e<t?t:e,Math.floor(Math.random()*(e-t+1))+t),setting:g,shuffleArray:u,UUID:n,spacer:void 0},tag:{tag:class{constructor(e){this.d=void 0,this.d=e}get data(){return this.d}set data(e){this.d=e}}}};export{m as default};
