import { addIntoClassList } from 'src/core/fn/addIntoClassList.js';
import { setting } from 'src/core/fn/setting.js';
import { IAttachResult, IBase } from './../base.interface';
import { allow } from './allow.js';
import { db } from './var.js';

export const attachBootstrap = (key:string, elem:HTMLElement, opt:IBase):IAttachResult => {
	let a_key = allow(key);
	if (a_key !== null) {
		if (Array.isArray(opt[key])) {
			let shared = false;
			opt[key].forEach((i:any) => {
				if (db[a_key].value.indexOf(i) > -1) {
					shared = shared === false && db[a_key].shared !== false ? true : false;
					if (db[a_key].hasOwnProperty("formatValue")) {
						elem = addIntoClassList(elem, db[a_key].formatValue);
					}

					if (i === true) {
						if (db[a_key].hasOwnProperty("formatTrue")) {
							elem = addIntoClassList(elem, db[a_key].formatTrue);
						}
					} else if (i === false) {
						if (db[a_key].hasOwnProperty("formatFalse")) {
							elem = addIntoClassList(elem, db[a_key].formatFalse);
						}
					} else {
						if (db[a_key].hasOwnProperty("format")) {
							elem = addIntoClassList(elem, db[a_key].format.replace(/\$1/g, i));
						}
					}
				} else {
					if (setting.DEBUG)
						console.warn(`${a_key}:"${i}" is not supported value for bootstrap property`);
				}
			});

			if (!shared) {
				delete opt[key];
			}
		} else {
			if (db[a_key].value.indexOf(opt[key]) > -1) {
				if (db[a_key].hasOwnProperty("formatValue")) {
					elem = addIntoClassList(elem, db[a_key].formatValue);
				}

				if (opt[key] === true) {
					if (db[a_key].hasOwnProperty("formatTrue")) {
						elem = addIntoClassList(elem, db[a_key].formatTrue);
					}
				} else if (opt[key] === false) {
					if (db[a_key].hasOwnProperty("formatFalse")) {
						elem = addIntoClassList(elem, db[a_key].formatFalse);
					}
				} else {
					if (db[a_key].hasOwnProperty("format")) {
						elem = addIntoClassList(elem, db[a_key].format.replace(/\$1/g, opt[key]));
					}
				}

				if (!db[a_key].shared) {
					delete opt[key];
				}
			} else {
				if (setting.DEBUG)
					console.warn(`${opt[key]}:"${key}" is not supported value for bootstrap property`);
			}
		}
	}

	return { opt, elem };
}