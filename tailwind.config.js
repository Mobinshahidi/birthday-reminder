/** @type {import('tailwindcss').Config} */
export default {
	content: [
    './**/*.html',
    './src/components/**/*.{jsx,js}'
  ],
	theme: {
		extend: {
			boxShadow:{
				"bx":"rgba(0, 0, 0, 0.1) 0px 10px 50px",
			},
			backgroundColor:{
				"pr":"#370aeb", 
			}
		},
	},
	plugins: [],
};
