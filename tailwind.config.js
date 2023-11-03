/** @type {import('tailwindcss').Config} */
export default {
	content: [
    './**/*.html',
    './src/components/**/*.{jsx,js}'
  ],
	theme: {
		extend: {
			boxShadow:{
				"bxx":"rgba(0, 0, 0, 0.1) 0px 10px 50px",
				"bx":"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
			},
			backgroundColor:{
				"pr":"#370aeb", 
			}
		},
	},
	plugins: [],
};
