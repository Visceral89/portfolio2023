const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	important: true,
	purge: {
		content: [
			"./components/**/*.{js,ts,jsx,tsx}",
			"./pages/**/*.{js,ts,jsx,tsx}",
		],
		options: {
			safelist: {
				standard: ["outline-none"],
			},
		},
	},
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				jet: ["JetBrainsMono", "sans-serif"],
			},
		},
	},
	plugins: [],
};
