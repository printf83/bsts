const num2EngDB = [
	{ value: 1000000000000000, str: "quadrillion" },
	{ value: 1000000000000, str: "trillion" },
	{ value: 1000000000, str: "billion" },
	{ value: 1000000, str: "million" },
	{ value: 1000, str: "thousand" },
	{ value: 100, str: "hundred" },
	{ value: 90, str: "ninety" },
	{ value: 80, str: "eighty" },
	{ value: 70, str: "seventy" },
	{ value: 60, str: "sixty" },
	{ value: 50, str: "fifty" },
	{ value: 40, str: "forty" },
	{ value: 30, str: "thirty" },
	{ value: 20, str: "twenty" },
	{ value: 19, str: "nineteen" },
	{ value: 18, str: "eighteen" },
	{ value: 17, str: "seventeen" },
	{ value: 16, str: "sixteen" },
	{ value: 15, str: "fifteen" },
	{ value: 14, str: "fourteen" },
	{ value: 13, str: "thirteen" },
	{ value: 12, str: "twelve" },
	{ value: 11, str: "eleven" },
	{ value: 10, str: "ten" },
	{ value: 9, str: "nine" },
	{ value: 8, str: "eight" },
	{ value: 7, str: "seven" },
	{ value: 6, str: "six" },
	{ value: 5, str: "five" },
	{ value: 4, str: "four" },
	{ value: 3, str: "three" },
	{ value: 2, str: "two" },
	{ value: 1, str: "one" },
];

export const num2En = (num:number):string => {
	let result = "";
	for (let n of num2EngDB) {
		if (num >= n.value) {
			if (num <= 99) {
				result += n.str;
				num -= n.value;
				if (num > 0) result += " ";
			} else {
				let t = Math.floor(num / n.value);
				let d = num % n.value;
				if (d > 0) {
					return `${num2En(t)} ${n.str} ${num2En(d)}`;
				} else {
					return `${num2En(t)} ${n.str}`;
				}
			}
		}
	}
	return result;
};