<template>
	<v-app-bar
	 app
	 color="primary"
	 flat
	 dark>
		<!-- <div class="d-flex align-center">
			<router-link to="/" class="header-logo">
				<v-img :src="require('@/assets/logo.png')" alt="PV Pest Logo" width="125" contain></v-img>
			</router-link>
		</div> -->
		PV Pest Solutions
		<v-spacer></v-spacer>
		<router-link to="/">
			<v-btn
			 text
			 color="softGrey">
				Home
			</v-btn>
		</router-link>
		<router-link to="/serviceAreas">
			<v-btn
			 text
			 color="softGrey">
				Service Areas
			</v-btn>
		</router-link>
		<router-link to="/pricing">
			<v-btn
			 text
			 color="softGrey">
				Pricing
			</v-btn>
		</router-link>
		<router-link to="/about">
			<v-btn
			 text
			 color="softGrey">
				About
			</v-btn>
		</router-link>
		<a href="tel:+16024921056" class="text-decoration-none white--text">+1 (602) 492-1056</a>
		<v-btn
		 href="https://www.instagram.com/pvpest.solutions/"
		 target="_blank"
		 icon
		 small
		 color="white">
			<v-icon small>fab fa-fw fa-instagram</v-icon>
		</v-btn>
		<v-btn
		 href="https://www.facebook.com/pvpestsolutions"
		 target="_blank"
		 icon
		 small
		 color="white">
			<v-icon small>fab fa-fw fa-facebook-f</v-icon>
		</v-btn>
		<v-btn
		 href="tel:+16024921056"
		 color="white"
		 outlined
		 rounded
		 elevation="5"
		 class="mt-2"
		 medium>
			Call Now
		</v-btn>
	</v-app-bar>
</template>
<script>
export default {
	name: 'App-Bar',
	data: () => ({
		//
	}),
};
</script>
<style>
a:hover {
	text-decoration: none !important;
	color: inherit;
}
</style>