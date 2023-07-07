export const animation = () => {
	/*  Animation
    ------------------------*/

	const rotation = `
    .animate-rotation {
        animation-name: bs-rotation;
        animation-duration: 4s;	
        animation-timing-function: linear;	
        animation-iteration-count: infinite;
    }
    `;

	const sidetoside = `
    .animate-sidetoside {
        animation-name: bs-sidetoside;
        animation-duration: 3s;	
        animation-timing-function: ease;	
        animation-iteration-count: infinite;
    }
    `;

	const zoom_in = `
    .animate-zoom-in {
        animation-name: bs-zoom-in;
        animation-duration: 1s;	
        animation-timing-function: cubic-bezier(0.5, 0.2, 0.3, 1.0);	
        animation-iteration-count: 1;	
    }
    `;
	const zoom_out = `
    .animate-zoom-out {
        animation-name: bs-zoom-out;
        animation-duration: 1s;	
        animation-timing-function: cubic-bezier(0.5, 0.2, 0.3, 1.0);	
        animation-iteration-count: 1;	
        animation-fill-mode: forwards;	
    }
    `;
	const spin = `
    .animate-spin {
        animation-name: bs-spin;
        animation-duration: 2s;	
        animation-timing-function: linear;	
        animation-iteration-count: infinite;
    }
    `;
	const pulse = `
    .animate-pulse {
        animation-name: bs-pulse;
        animation-duration: 2s;	
        animation-timing-function: linear;	
        animation-iteration-count: infinite;
    }
    `;
	const shake = `
    .animate-shake {
        animation-name: bs-shake;
        animation-duration: 400ms;	
        animation-timing-function: ease;	
        animation-iteration-count: infinite;
    }
    `;
	const barrel_roll = `
    .animate-barrel-roll {
        animation-name: bs-barrel-role;
        animation-duration: 400ms;	
        animation-timing-function: ease;	
        animation-iteration-count: 1;
    }
    `;
	const floater = `
    .animate-floater {
        animation-name: bs-floater;
        animation-duration: 1500ms;	
        animation-iteration-count: infinite;
    }
    `;
	const wiggle = `
    .animate-wiggle {
        animation-name: bs-wiggle;
        animation-duration: 2500ms;	
        animation-iteration-count: infinite;
    }
    `;
	const pound = `
    .animate-pound {
        animation-name: bs-pound;
        animation-duration: 500ms;	
        animation-timing-function: ease;	
        animation-iteration-count: infinite;
    }
    `;
	const heartbeat = `
    .animate-heartbeat {
        animation-name: bs-heartbeat;
        animation-duration: 3s;	
        animation-timing-function: ease;	
        animation-iteration-count: infinite;
    }
    `;
	const roller_right = `
    .animate-roller-right {
        animation-name: bs-roller-right;
        animation-duration: 2s;	
        animation-timing-function: ease;	
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    `;
	const roller_left = `
    .animate-roller-left {
        animation-name: bs-roller-left;
        animation-duration: 2s;	
        animation-timing-function: ease;	
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    `;
	const slide_down = `
    .animate-slide-down {
        animation-name: bs-slide-down;
        animation-duration: 1s;	
        animation-timing-function: ease;	
    }
    `;
	const slide_up = `
    .animate-slide-up {
        animation-name: bs-slide-up;
        animation-duration: 1s;	
        animation-timing-function: ease;	
    }
    `;
	const slide_left = `
    .animate-slide-left {
        animation-name: bs-slide-left;
        animation-duration: 1s;	
        animation-timing-function: ease;	
    }
    `;
	const slide_right = `
    .animate-slide-right {
        animation-name: bs-slide-right;
        animation-duration: 1s;	
        animation-timing-function: ease;	
    }
    `;
	const fade_in = `
    .animate-fade-in {
        animation-name: bs-fade-in;
        animation-duration: 2s;	
        animation-timing-function: ease;	
    }
    `;
	const fade_out = `
    .animate-fade-out {
        animation-name: bs-fade-out;
        animation-duration: 2s;	
        animation-timing-function: ease;
        animation-fill-mode: forwards;	
    }
    `;
	const rotate_in_right = `
    .animate-rotate-in-right {
        animation-name: bs-rotate-in-right;
        animation-duration: 3s;	
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
    }
    `;
	const rotate_in_left = `
    .animate-rotate-in-left {
        animation-name: bs-rotate-in-left;
        animation-duration: 3s;	
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
    }
    `;
	const rotate_in = `
    .animate-rotate-in {
        animation-name: bs-rotate-in;
        animation-duration: 3s;	
        animation-timing-function: ease;
        animation-iteration-count: 1;
        transform-origin: center;
    }
    `;
	const bounce_in = `
    .animate-bounce-in {
        animation-name: bs-bounce-in;
        animation-duration: 800ms;	
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    `;

	const animate = `
    ${rotation}
    ${sidetoside}
    ${zoom_in}
    ${zoom_out}
    ${spin}
    ${pulse}
    ${shake}
    ${barrel_roll}
    ${floater}
    ${wiggle}
    ${heartbeat}
    ${roller_right}
    ${roller_left}
    ${slide_down}
    ${slide_up}
    ${slide_left}
    ${slide_right}
    ${fade_in}
    ${fade_out}
    ${rotate_in_right}
    ${rotate_in_left}
    ${rotate_in}
    ${bounce_in}
    `;

	/*  keyframes
    ------------------------*/
	const kf_rotation = `
    @keyframes bs-rotation {
        from { 
            transform: rotate(0deg) translateX(50%) rotate(0deg); 
        }
        to { 
            transform: rotate(360deg) translateX(50%) rotate(-360deg); 
        }
    }
    `;

	const kf_sidetoside = `
    @keyframes bs-sidetoside {
        0% {
            transform: translate(100%, 0);
        }
        50% {
            transform: translate(-100%, 0);
        }
        100% {
            transform: translate(100%, 0);
        }
    }
    `;

	const kf_zoom_in = `
    @keyframes bs-zoom-in {
        0% {
            transform: scale(.3);
        }
        100% {
            transform: scale(1);
        }
    }
    `;

	const kf_zoom_out = `
    @keyframes bs-zoom-out {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    `;

	const kf_spin = `
    @keyframes bs-spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
    `;

	const kf_pulse = `
    @keyframes bs-pulse {
        0% {
            transform: scale(0.9);
            opacity: 0.9;		
        }
        50% {
            transform: scale(1);
            opacity: 1;	
        }	
        100% {
            transform: scale(0.9);
            opacity: 0.9;	
        }
    }
    `;

	const kf_shake = `
    @keyframes bs-shake {
        0%, 100% {
            transform: translateX(0);
        }
        16%, 50%, 83% {
            transform: translateX(-10px);
        }
        33%, 66% {
            transform: translateX(10px);
        }
    }
    `;

	const kf_barrel_roll = `
    @keyframes bs-barrel-roll {
        from { 
            transform: rotate(0deg) ;
        }
        to { 
            transform: rotate(360deg);
        }
    }
    `;

	const kf_floater = `
    @keyframes bs-floater {
        0% {
            transform: translateY(0%);	
        }
        50% {
            transform: translateY(8%);	
        }	
        100% {
            transform: translateY(0%);
        }
    }
    `;

	const kf_wiggle = `
    @keyframes bs-wiggle {
        0% {
            transform: rotate(-4deg);	
        }
        50% {
            transform: rotate(4deg);
        }
        100% {
            transform: rotate(-4deg);	
        }
    }
    `;

	const kf_pound = `
    @keyframes bs-pound {
        to { 
            transform: scale(1.2); 
        }
    }
    `;

	const kf_heartbeat = `
    @keyframes bs-heartbeat {
        0% {
            transform: scale(1);	
        }
        10% {
            transform: scale(1.2);
        }
        20% {
            transform: scale(1.4);
        }
        100% {
            transform: scale(1);	
        }		
    }
    `;

	const kf_roller_right = `
    @keyframes bs-roller-right {
        0% {
            transform: translateX(-200px) rotate(0);
            opacity: 0;	
        }				
        100% {
            transform: translateX(0) rotate(2turn);
            opacity: 1;
        }
    }
    `;

	const kf_roller_left = `
    @keyframes bs-roller-left {
        0% {
            transform: translateX(200px) rotate(0);
            opacity: 0;	
        }	
        100% {
            transform: translateX(0) rotate(-2turn);
            opacity: 1;	
        }
    }
    `;

	const kf_slide_down = `
    @keyframes bs-slide-down {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }	
        100% {
            transform: translateY(0%);
            opacity: 1;
        }	
    }
    `;

	const kf_slide_up = `
    @keyframes bs-slide-up {
        0% {
            transform: translateY(100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0%);
            opacity: 1;
        }	
    }
    `;

	const kf_slide_left = `
    @keyframes bs-slide-left {
        0% {
            transform: translateX(150%);
            opacity: 0;
        }		
        100% {
            transform: translateX(0%);
            opacity: 1;
        }	
    }
    `;

	const kf_slide_right = `
    @keyframes bs-slide-right {
        0% {
            transform: translateX(-150%);
            opacity: 0;
        }		
        100% {
            transform: translateX(0%);
            opacity: 1;
        }		
    }
    `;

	const kf_fade_in = `
    @keyframes bs-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }		
    }
    `;

	const kf_fade_out = `
    @keyframes bs-fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }		
    }
    `;

	const kf_rotate_in_right = `
    @keyframes bs-rotate-in-right {
        from { 
            transform: rotate(0deg) translateX(100%) rotate(0deg); 
        }
        to   { 
            transform: rotate(360deg) translateX(0) rotate(-360deg); 
        }		
    }
    `;

	const kf_rotate_in_left = `
    @keyframes bs-rotate-in-left {
        from { 
            transform: rotate(0deg) translateX(-100%) rotate(0deg); 
        }
        to   { 
            transform: rotate(360deg) translateX(0) rotate(-360deg); 
        }		
    }
    `;

	const kf_rotate_in = `
    @keyframes bs-rotate-in {
        0% {
            transform: rotate3d(0, 0, 1, -720deg);
            opacity: 0;
        }

        100% {
            transform: none;
            opacity: 1;
        }	
    }
    `;

	const kf_bounce_in = `
    @keyframes bs-bounce-in {
        0% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }

        20% {
            transform: scale3d(1.1, 1.1, 1.1);
        }

        40% {
            transform: scale3d(.9, .9, .9);
        }

        60% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
        }

        80% {
            transform: scale3d(.97, .97, .97);
        }

        100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
        }	
    }
    `;

	const kf = `
    ${kf_barrel_roll}
    ${kf_bounce_in}
    ${kf_fade_in}
    ${kf_fade_out}
    ${kf_floater}
    ${kf_heartbeat}
    ${kf_pound}
    ${kf_pulse}
    ${kf_roller_left}
    ${kf_roller_right}
    ${kf_rotation}
    ${kf_rotate_in}
    ${kf_rotate_in_left}
    ${kf_rotate_in_right}
    ${kf_shake}
    ${kf_sidetoside}
    ${kf_slide_down}
    ${kf_slide_left}
    ${kf_slide_right}
    ${kf_slide_up}
    ${kf_spin}
    ${kf_wiggle}
    ${kf_zoom_in}
    ${kf_zoom_out}
    `;

	/*  Utilities
    ------------------------*/

	const util_duration = ["250ms", "400ms", "500ms", "800ms", "1s", "1500ms", "2s", "2500ms", "3s", "4s", "5s"]
		.map(
			(i) => `
            .animate-duration-${i} {
                animation-duration: ${i}ms;
            }`
		)
		.join("\n");

	const util_repeat = [1, 2, 3, 5, 10, "infinite"]
		.map(
			(i) => `
            .animate-repeat-${i} {
                animation-iteration-count: ${i};
            }`
		)
		.join("\n");
	const util_direction = [
		"normal",
		"reverse",
		"alternate",
		"alternate-reverse",
		{ name: "normal-reverse", value: "normal, reverse" },
		{ name: "alternate-reverse-normal", value: "alternate, reverse, normal" },
	]
		.map((i) => {
			if (typeof i === "string") {
				return `
                .animate-direction-${i} {
                    animation-direction: ${i};
                }`;
			} else {
				return `
                .animate-direction-${i.name} {
                    animation-direction: ${i.value};
                }`;
			}
		})
		.join("\n");
	const util_delay = ["250ms", "400ms", "500ms", "800ms", "1s", "1500ms", "2s", "2500ms", "3s", "4s", "5s"]
		.map(
			(i) => `
            .animate-delay-${i} {
                animation-delay: ${i};
            }`
		)
		.join("\n");
	const util_fill = [
		"none",
		"forwards",
		"backwards",
		"both",
		{ name: "none-backward", value: "none, backwards" },
		{ name: "both-foward-none", value: "none, forwards, none" },
	]
		.map((i) => {
			if (typeof i === "string") {
				return `
                .animate-fill-${i} {
                    animation-fill-mode: ${i};
                }`;
			} else {
				return `
                .animate-fill-${i.name} {
                    animation-fill-mode: ${i.value};
                }`;
			}
		})
		.join("\n");
	const util_timing = [
		"ease",
		"ease-in-out",
		"linear",
		{
			name: "zoom",
			value: "cubic-bezier(0.5, 0.2, 0.3, 1.0)",
		},
		{
			name: "bounce",
			value: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		},
	].map((i) => {
		if (typeof i === "string") {
			return `
                .animate-timing-${i} {
                    animation-timing-function: ${i};
                }`;
		} else {
			return `
                .animate-timing-${i.name} {
                    animation-timing-function: ${i.value};
                }`;
		}
	});

	const util = `
    ${util_duration}
    ${util_repeat}
    ${util_direction}
    ${util_delay}
    ${util_fill}
    ${util_timing}
    `;

	return `
    /* 
    src/core/css/animation.ts 
    Thanks to : kristofferandreasen.github.io/wickedCSS
    ------------------------- */
    ${kf}

    ${animate}

    ${util}
    `;
};
