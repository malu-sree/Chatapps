// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}", // Include all React files for Tailwind processing
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   };
  /** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
    daisyui: {
        themes: ["light", "dark", "cupcake", "bumblebee"],  // Add any themes you want to use
      },
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};