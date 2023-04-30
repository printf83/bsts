import { Body, body } from "./body.js";
import { Btnclose, btnclose, IBsToastBtnclose } from "./btnclose.js";
import { Container, container, IBsToastContainer } from "./container.js";
import { Header, header } from "./header.js";
import { item, IBsToastItem, Item } from "./item.js";
import { Time, time } from "./time.js";
import { Title, title } from "./title.js";
import { dispose, getInstance, getOrCreateInstance, hide, IBsToastSimple, isShown, show, Simple } from "./_fn.js";

export {
	item,
	body,
	btnclose,
	container,
	header,
	time,
	title,
	IBsToastBtnclose,
	IBsToastContainer,
	IBsToastItem,
	IBsToastSimple as IBsToastTemplate,
	show,
	getInstance,
	getOrCreateInstance,
	hide,
	dispose,
	isShown,
};

export { Item, Body, Btnclose, Container, Header, Time, Title, Simple };
