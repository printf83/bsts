export const btnToggle = `
	/* btn-toggle */
	.btn-toggle {
		padding: .25rem .5rem;
		font-weight: 600;
		color: var(--bs-emphasis-color);
		background-color: transparent;border: none;
	}
	.btn-toggle:hover,
	.btn-toggle:focus,
	.btn-toggle-nav a:hover,
	.btn-toggle-nav a:hover {
		color: rgba(var(--bs-emphasis-color-rgb), .85);
		background-color: var(--bs-tertiary-bg);
	}

	.btn-toggle::before{
		width: 1.25em;
		display: inline-block;
		line-height: 0;
		content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
		transition: transform .35s ease;
		transform-origin: .5em 50%;
	}

	[data-bs-theme="dark"] .btn-toggle::before {
		content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%28255,255,255,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
	}

	.btn-toggle[aria-expanded="true"]::before {
		transform: rotate(90deg);
	}
`;
