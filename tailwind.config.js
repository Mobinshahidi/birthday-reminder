/** @type {import('tailwindcss').Config} */
export default {
	content: ['./**/*.html', './src/components/**/*.{jsx,js}'],
	theme: {
		extend: {
			boxShadow: {
				bxx: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
				bx: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px',
				b: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
				c: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
			},
			backgroundColor: {
				pr: '#370aeb',
				bt: 'rgb(38, 52, 253)',
				bth:"rgb(67, 79, 249)"
			},
			borderColor: {
				bt: 'rgb(38, 52, 253)',
				bth:"rgb(67, 79, 249)"

			},
		},
		screens: {
			'2xl': {'max': '1535px'},
			// => @media (max-width: 1535px) { ... }
	  
			'xl': {'max': '1279px'},
			// => @media (max-width: 1279px) { ... }
	  
			'lg': {'max': '1023px'},
			// => @media (max-width: 1023px) { ... }
	  
			'md': {'max': '767px'},
			// => @media (max-width: 767px) { ... }
	  
			'sm': {'max': '639px'},
			// => @media (max-width: 639px) { ... }
		  },
	},
	plugins: [],
};
