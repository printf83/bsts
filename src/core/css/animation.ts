/**
 * Defines CSS animations.
 */
export const animation = () => {
	/*  Animation
    ------------------------*/

	const animateFn = (name: string, code: string) => `
    i.animate-${name}::before,
    .animate-${name}:not(i) {
        animation-name: bs-${name};
        ${code}
    }
    `;

	const animateFn2 = (name: string, code: string) => `
    .animate-${name} {
        animation-name: bs-${name};
        ${code}
    }
    `;

	const rotation = animateFn(
		`rotation`,
		`
        animation-duration: 4s;	
        animation-timing-function: linear;	
        animation-iteration-count: infinite;
        `
	);

	const sidetoside = animateFn(
		`sidetoside`,
		`
        animation-duration: 3s;	
        animation-timing-function: ease;	
        animation-iteration-count: infinite;
        `
	);

	const zoom_in = animateFn2(
		`zoom-in`,
		`
        animation-duration: 1s;	
        animation-timing-function: cubic-bezier(0.5, 0.2, 0.3, 1.0);	
        animation-iteration-count: 1;
        `
	);

	const zoom_out = animateFn2(
		`zoom-out`,
		`
        animation-duration: 1s;	
        animation-timing-function: cubic-bezier(0.5, 0.2, 0.3, 1.0);	
        animation-iteration-count: 1;	
        animation-fill-mode: forwards;
        `
	);

	const spin = animateFn(
		`spin`,
		`
        animation-duration: 2s;	
        animation-timing-function: linear;	
        animation-iteration-count: infinite;
        `
	);

	const pulse = animateFn(
		`pulse`,
		`
        animation-duration: 2s;	
        animation-timing-function: linear;	
        animation-iteration-count: infinite;
        `
	);

	const shake = animateFn(
		`shake`,
		`
        animation-duration: 400ms;	
        animation-timing-function: ease;	
        animation-iteration-count: infinite;
        `
	);

	const barrel_roll = animateFn2(
		`barrel-roll`,
		`
        animation-duration: 400ms;	
        animation-timing-function: ease;	
        animation-iteration-count: 1;
        `
	);

	const floater = animateFn(
		`floater`,
		`
        animation-duration: 1500ms;	
        animation-iteration-count: infinite;
        `
	);

	const wiggle = animateFn(
		`wiggle`,
		`
        animation-duration: 250ms;	
        animation-iteration-count: infinite;
        `
	);

	const pound = animateFn(
		`pound`,
		`
        animation-duration: 500ms;	
        animation-timing-function: ease;	
        animation-iteration-count: infinite;
        `
	);

	const heartbeat = animateFn(
		`heartbeat`,
		`
        animation-duration: 1s;	
        animation-timing-function: ease;	
        animation-iteration-count: infinite;
        `
	);

	const roller_in_right = animateFn2(
		`roller-in-right`,
		`
        animation-duration: 2s;	
        animation-timing-function: ease;	
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        `
	);

	const roller_in_left = animateFn2(
		`roller-in-left`,
		`
        animation-duration: 2s;	
        animation-timing-function: ease;	
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        `
	);

	const roller_out_right = animateFn2(
		`roller-out-right`,
		`
        animation-duration: 2s;	
        animation-timing-function: ease;	
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        `
	);

	const roller_out_left = animateFn2(
		`roller-out-left`,
		`
        animation-duration: 2s;	
        animation-timing-function: ease;	
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        `
	);

	const slide_in_bottom = animateFn2(
		`slide-in-bottom`,
		`
        animation-duration: 1s;	
        animation-timing-function: ease;
        `
	);

	const slide_in_top = animateFn2(
		`slide-in-top`,
		`
        animation-duration: 1s;	
        animation-timing-function: ease;
        `
	);

	const slide_in_left = animateFn2(
		`slide-in-left`,
		`
        animation-duration: 1s;	
        animation-timing-function: ease;
        `
	);

	const slide_in_right = animateFn2(
		`slide-in-right`,
		`
        animation-duration: 1s;	
        animation-timing-function: ease;
        `
	);

	const slide_out_bottom = animateFn2(
		`slide-out-bottom`,
		`
        animation-duration: 1s;	
        animation-timing-function: ease;
        `
	);

	const slide_out_top = animateFn2(
		`slide-out-top`,
		`
        animation-duration: 1s;	
        animation-timing-function: ease;
        `
	);

	const slide_out_left = animateFn2(
		`slide-out-left`,
		`
        animation-duration: 1s;	
        animation-timing-function: ease;
        `
	);

	const slide_out_right = animateFn2(
		`slide-out-right`,
		`
        animation-duration: 1s;	
        animation-timing-function: ease;
        `
	);

	const fade_in = animateFn2(
		`fade-in`,
		`
        animation-duration: 2s;	
        animation-timing-function: ease;
        `
	);

	const fade_out = animateFn2(
		`fade-out`,
		`
        animation-duration: 2s;	
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        `
	);

	const rotate_in_right = animateFn2(
		`rotate-in-right`,
		`
        animation-duration: 3s;	
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        `
	);

	const rotate_in_left = animateFn2(
		`rotate-in-left`,
		`
        animation-duration: 3s;	
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        `
	);

	const rotate_in = animateFn2(
		`rotate-in`,
		`
        animation-duration: 3s;	
        animation-timing-function: ease;
        animation-iteration-count: 1;
        transform-origin: center;
        `
	);

	const rotate_out_right = animateFn2(
		`rotate-out-right`,
		`
        animation-duration: 3s;	
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        `
	);

	const rotate_out_left = animateFn2(
		`rotate-out-left`,
		`
        animation-duration: 3s;	
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        `
	);

	const rotate_out = animateFn2(
		`rotate-out`,
		`
        animation-duration: 3s;	
        animation-timing-function: ease;
        animation-iteration-count: 1;
        transform-origin: center;
        `
	);

	const bounce_in = animateFn2(
		`bounce-in`,
		`
        animation-duration: 800ms;	
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        `
	);

	const bounce_out = animateFn2(
		`bounce-out`,
		`
        animation-duration: 800ms;	
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        `
	);

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
    ${pound}
    ${heartbeat}
    ${roller_in_right}
    ${roller_in_left}
    ${roller_out_right}
    ${roller_out_left}
    ${slide_in_bottom}
    ${slide_in_top}
    ${slide_in_left}
    ${slide_in_right}
    ${slide_out_bottom}
    ${slide_out_top}
    ${slide_out_left}
    ${slide_out_right}
    ${fade_in}
    ${fade_out}
    ${rotate_in_right}
    ${rotate_in_left}
    ${rotate_in}
    ${rotate_out_right}
    ${rotate_out_left}
    ${rotate_out}
    ${bounce_in}
    ${bounce_out}
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
        0%, 5%, 95%, 100% {
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

	const kf_roller_in_right = `
    @keyframes bs-roller-in-right {
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

	const kf_roller_in_left = `
    @keyframes bs-roller-in-left {
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

	const kf_roller_out_right = `
    @keyframes bs-roller-out-right {
        0% {
            transform: translateX(0) rotate(2turn);
            opacity: 1;
        }				
        100% {
            transform: translateX(-200px) rotate(0);
            opacity: 0;	
        }
    }
    `;

	const kf_roller_out_left = `
    @keyframes bs-roller-out-left {
        0% {
            transform: translateX(0) rotate(-2turn);
            opacity: 1;	
        }	
        100% {
            transform: translateX(200px) rotate(0);
            opacity: 0;	
        }
    }
    `;

	const kf_slide_in_bottom = `
    @keyframes bs-slide-in-bottom {
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

	const kf_slide_in_top = `
    @keyframes bs-slide-in-top {
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

	const kf_slide_in_left = `
    @keyframes bs-slide-in-left {
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

	const kf_slide_in_right = `
    @keyframes bs-slide-in-right {
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

	const kf_slide_out_bottom = `
    @keyframes bs-slide-out-bottom {
        0% {
            transform: translateY(0%);
            opacity: 1;
        }
        100% {
            transform: translateY(100%);
            opacity: 0;
        }
    }
    `;

	const kf_slide_out_top = `
    @keyframes bs-slide-out-top {
        0% {
            transform: translateY(0%);
            opacity: 1;
        }	
        100% {
            transform: translateY(-100%);
            opacity: 0;
        }		
    }
    `;

	const kf_slide_out_left = `
    @keyframes bs-slide-out-left {
        0% {
            transform: translateX(0%);
            opacity: 1;
        }		
        100% {
            transform: translateX(-150%);
            opacity: 0;
        }	
    }
    `;

	const kf_slide_out_right = `
    @keyframes bs-slide-out-right {
        0% {
            transform: translateX(0%);
            opacity: 1;
        }		
        100% {
            transform: translateX(150%);
            opacity: 0;
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

	const kf_rotate_out_right = `
    @keyframes bs-rotate-out-right {
        from { 
            transform: rotate(360deg) translateX(0) rotate(-360deg); 
        }
        to   { 
            transform: rotate(0deg) translateX(100%) rotate(0deg); 
        }		
    }
    `;

	const kf_rotate_out_left = `
    @keyframes bs-rotate-out-left {
        from { 
            transform: rotate(360deg) translateX(0) rotate(-360deg); 
        }
        to   {
            transform: rotate(0deg) translateX(-100%) rotate(0deg); 
        }		
    }
    `;

	const kf_rotate_out = `
    @keyframes bs-rotate-out {
        0% {
            transform: none;
            opacity: 1;
        }

        100% {
            transform: rotate3d(0, 0, 1, -720deg);
            opacity: 0;
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

	const kf_bounce_out = `
    @keyframes bs-bounce-out {
        0% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
        }

        20% {
            transform: scale3d(.97, .97, .97);
        }

        40% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
        }

        60% {
            transform: scale3d(.9, .9, .9);
        }

        80% {
            transform: scale3d(1.1, 1.1, 1.1);
        }

        100% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }
    }
    `;

	const kf = `
    ${kf_barrel_roll}
    ${kf_bounce_in}
    ${kf_bounce_out}
    ${kf_fade_in}
    ${kf_fade_out}
    ${kf_floater}
    ${kf_heartbeat}
    ${kf_pound}
    ${kf_pulse}
    ${kf_roller_in_left}
    ${kf_roller_in_right}
    ${kf_roller_out_left}
    ${kf_roller_out_right}
    ${kf_rotation}
    ${kf_rotate_in}
    ${kf_rotate_in_left}
    ${kf_rotate_in_right}
    ${kf_rotate_out}
    ${kf_rotate_out_left}
    ${kf_rotate_out_right}
    ${kf_shake}
    ${kf_sidetoside}
    ${kf_slide_in_bottom}
    ${kf_slide_in_left}
    ${kf_slide_in_right}
    ${kf_slide_in_top}
    ${kf_slide_out_bottom}
    ${kf_slide_out_left}
    ${kf_slide_out_right}
    ${kf_slide_out_top}
    ${kf_spin}
    ${kf_wiggle}
    ${kf_zoom_in}
    ${kf_zoom_out}
    `;

	/*  Utilities
    ------------------------*/

	const util_duration = [
		"50ms",
		"100ms",
		"250ms",
		"300ms",
		"350ms",
		"400ms",
		"450ms",
		"500ms",
		"600ms",
		"700ms",
		"800ms",
		"900ms",
		"1s",
		"1500ms",
		"2s",
		"2500ms",
		"3s",
		"3500ms",
		"4s",
		"4500ms",
		"5s",
	]
		.map(
			(i) => `
            i.animate-duration-${i}::before,
            .animate-duration-${i}:not(i) {
                animation-duration: ${i} !important;
            }`
		)
		.join("\n");

	const util_repeat = [1, 2, 3, 5, 10, "infinite"]
		.map(
			(i) => `
            i.animate-repeat-${i}::before,
            .animate-repeat-${i}:not(i) {
                animation-iteration-count: ${i} !important;
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
                i.animate-direction-${i}::before,
                .animate-direction-${i}:not(i) {
                    animation-direction: ${i} !important;
                }`;
			} else {
				return `
                i.animate-direction-${i.name}::before,
                .animate-direction-${i.name} {
                    animation-direction: ${i.value} !important;
                }`;
			}
		})
		.join("\n");
	const util_delay = [
		"50ms",
		"100ms",
		"250ms",
		"300ms",
		"350ms",
		"400ms",
		"450ms",
		"500ms",
		"600ms",
		"700ms",
		"800ms",
		"900ms",
		"1s",
		"1500ms",
		"2s",
		"2500ms",
		"3s",
		"3500ms",
		"4s",
		"4500ms",
		"5s",
	]
		.map(
			(i) => `
            i.animate-delay-${i}::before,
            .animate-delay-${i}:not(i) {
                animation-delay: ${i} !important;
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
                i.animate-fill-${i}::before,
                .animate-fill-${i}:not(i) {
                    animation-fill-mode: ${i} !important;
                }`;
			} else {
				return `
                i.animate-fill-${i.name}::before,
                .animate-fill-${i.name}:not(i) {
                    animation-fill-mode: ${i.value} !important;
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
	]
		.map((i) => {
			if (typeof i === "string") {
				return `
                i.animate-timing-${i}::before,
                .animate-timing-${i}:not(i) {
                    animation-timing-function: ${i} !important;
                }`;
			} else {
				return `
                .animate-timing-${i.name}::before,
                .animate-timing-${i.name}:not(i) {
                    animation-timing-function: ${i.value} !important;
                }`;
			}
		})
		.join("\n");

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
