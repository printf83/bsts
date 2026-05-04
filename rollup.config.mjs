import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "@rollup/plugin-terser";

const basePlugins = [
	nodeResolve({ browser: true, extensions: [".ts", ".js"] }),
	commonjs(),
	typescript({ tsconfig: "./tsconfig.esm.json", sourceMap: true, declaration: false }),
];

export default [
	{
		input: "src/index.ts",
		external: ["bootstrap", "@popperjs/core"],
		plugins: basePlugins,
		output: [
			{
				file: "build/esm/index.mjs",
				format: "es",
				sourcemap: true,
			},
			{
				file: "build/cjs/index.cjs",
				format: "cjs",
				sourcemap: true,
				exports: "named",
			},
		],
	},
	{
		input: "src/index.ts",
		plugins: [...basePlugins, terser()],
		output: [
			{
				file: "dist/bsts.browser.esm.js",
				format: "es",
				sourcemap: true,
				banner: "/* bsts browser-ready ESM bundle */",
			},
			{
				file: "dist/bsts.umd.js",
				format: "umd",
				name: "bsts",
				sourcemap: true,
				banner: "/* bsts browser-ready UMD bundle */",
			},
		],
	},
];
