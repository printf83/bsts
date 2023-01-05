export const cookie = {
	set: (name: string, value: string, expiredDays: number = 7): void => {
		let expDate = new Date();
		expiredDays = !value ? -1 : expiredDays;
		expDate.setTime(expDate.getTime() + expiredDays * 24 * 60 * 60 * 1000);
		document.cookie = `${name}=${value};expires=${expDate.toUTCString()};samesite=strict;path=/`;
	},
	get: (name: string): string | null => {
		name = `${name}=`;
		let decodedCookie = decodeURIComponent(document.cookie);
		let cookieString = decodedCookie.split(";");
		for (let i = 0; i < cookieString.length; i++) {
			let c = cookieString[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return null;
	},
};
