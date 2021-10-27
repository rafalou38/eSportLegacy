const colors = {
	white: '#fff',
	primary: '#BA3CBA',
	secondary: '#FF8C53',
	t: {
		light: '#E2D7E5',
		dark: '#939393',
		blue: '#35B6FF',
		green: '#00EC7B'
	},
	bg: {
		elem: '#272727',
		dark: '#162229',
		light: '#F1F2F2',
		lighter: '#F5F5F5'
	},
	grey: {
		4: '#42424F',
		5: '#171F2F',
		3: '#707081',
		2: '#B6B6C2',
		1.5: '#DDDDE7',
		1: '#EFEFF5'
	}
	// }
};

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			outline: {
				light: `2px solid ${colors.bg.light}`
			},
			boxShadow: {
				big: '0px 9px 14px 7px #00000040'
			}
		},
		colors,

		fontFamily: {
			poppins: ['Poppins', 'sans-serif']
		}
	},
	variants: {},
	plugins: []
};

module.exports = config;
