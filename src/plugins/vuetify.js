import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'fa' || 'mdi' // initialize Font Awesome as the default font for icons
	},
	theme: {
		themes: {
			light: {
				primary: '#000000',
				secondary: '#F6F6F6',
				accent: '#BC9C4E',
				error: '#f44336',
				warning: '#ff5722',
				info: '#4caf50',
				success: '#03a9f4',
				softGrey: '#E6E2DB',
				darkGrey: '#272725'
			},
			dark: {
				primary: '#34495E'
			}
		}
	}
});