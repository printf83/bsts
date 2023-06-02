import { Body } from "./body.js";
import { Btnclose } from "./btnclose.js";
import { Container } from "./container.js";
import { Header } from "./header.js";
import { Title } from "./title.js";
import { Toggle } from "./toggle.js";

export {
	Body as body,
	Btnclose as btnclose,
	Container as container,
	Header as header,
	Title as title,
	Toggle as toggle,
};

import { dispose, getInstance, getOrCreateInstance, hide, init, show, toggle as toggles } from "./_fn.js";
export { init, dispose, getInstance, getOrCreateInstance, hide, show, toggles };
