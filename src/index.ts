
import { core } from './core/index';
import tag from './tag/index';

export {core, tag};

console.log(core.UUID())
console.log(core.html([{tag:"span",elem:"Hello World"}]))