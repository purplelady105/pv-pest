<template>
	<v-app-bar
	 app
	 color="primary"
	 flat
	 prominent
	 dark>
		<div class="d-flex align-center">
			<router-link to="/" class="header-logo">
				<v-img :src="require('@/assets/logo.png')" alt="PV Pest Logo" width="125" contain></v-img>
			</router-link>
		</div>
		<v-spacer></v-spacer>
		<!-- <router-link to="/pay">
			<v-btn
			 text
			 color="softGrey">
				Pay
			</v-btn>
		</router-link> -->
		<router-link to="/serviceAreas">
			<v-btn
			 text
			 color="softGrey">
				Service Areas
			</v-btn>
		</router-link>
		<router-link to="/about">
			<v-btn
			 text
			 color="softGrey">
				About
			</v-btn>
		</router-link>
		<router-link to="/contact">
			<v-btn
			 text
			 color="softGrey">
				Contact
			</v-btn>
		</router-link>
		<v-btn
		 href="https://www.instagram.com/pvpest.solutions/"
		 target="_blank"
		 icon
		 color="white">
			<v-icon>fab fa-fw fa-instagram</v-icon>
		</v-btn>
		<v-btn
		 href="https://www.facebook.com/pvpestsolutions"
		 target="_blank"
		 icon
		 color="white">
			<v-icon>fab fa-fw fa-facebook-f</v-icon>
		</v-btn>
		<v-btn
		 href="tel:+16024921056"
		 color="accent"
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