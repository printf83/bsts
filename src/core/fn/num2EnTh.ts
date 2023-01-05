const num2EngThDB = [
	{ value: 1000000000000000, str: "quadrillion" },
	{ value: 1000000000000, str: "trillion" },
	{ value: 1000000000, str: "billion" },
	{ value: 1000000, str: "million" },
	{ value: 1000, str: "thousand" },
	{ value: 100, str: "hundred" },
	{ value: 90, str: "ninet" },
	{ value: 80, str: "eight" },
	{ value: 70, str: "sevent" },
	{ value: 60, str: "sixt" },
	{ value: 50, str: "fift" },
	{ value: 40, str: "fourt" },
	{ value: 30, str: "thirt" },
	{ value: 20, str: "twent" },
	{ value: 19, str: "nineteenth" },
	{ value: 18, str: "eighteenth" },
	{ value: 17, str: "seventeenth" },
	{ value: 16, str: "sixteenth" },
	{ value: 15, str: "fifteenth" },
	{ value: 14, str: "fourteenth" },
	{ value: 13, str: "thirteenth" },
	{ value: 12, str: "twelvth" },
	{ value: 11, str: "eleventh" },
	{ value: 10, str: "tenth" },
	{ value: 9, str: "ninth" },
	{ value: 8, str: "eighth" },
	{ value: 7, str: "seventh" },
	{ value: 6, str: "sixth" },
	{ value: 5, str: "fifth" },
	{ value: 4, str: "fourth" },
	{ value: 3, str: "third" },
	{ value: 2, str: "second" },
	{ value: 1, str: "first" },
];

export const num2EnTh = (num: number): string => {
	let result = "";
	for (let n of num2EngThDB) {
		if (num >= n.value) {
			if (num <= 99) {
				result += n.str;
				num -= n.value;
				if (num > 0) result += " ";
			} else {
				let t = Math.floor(num / n.value);
				let d = num % n.value;
				if (d > 0) {
					return `${num2EnTh(t)}-${n.str}-${num2EnTh(d)}`;
				} else {
					return `${num2EnTh(t)}-${n.str}`;
				}
			}
		}
	}
	return result;
};
