import { UUID } from "./uuid.js";

export interface IEventDB {
	[key: string]: Function;
}

const _db: IEventDB = {};

export const eventDB = {
	create: (fn: Function) => {
		let id = UUID();
		_db[id] = fn;
		return id;
	},
	call: (id: string): Function => _db[id],
	remove: (sender: HTMLElement) => {
		sender.getAttributeNames().forEach((name) => {
			if (name.startsWith("cl.event.")) {
				delete _db[sender.getAttribute(name)!];
			}
		});
	},
};
