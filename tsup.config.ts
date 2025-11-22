import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		index: "src/index.ts",
		styles: "src/styles.css",
	},
	format: ["cjs", "esm"],
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	external: ["react", "react-dom"],
	esbuildOptions(options) {
		options.banner = {
			js: '"use client"',
		};
	},
});
