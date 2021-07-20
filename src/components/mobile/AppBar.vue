<template>
	<div>
		<v-app-bar
		 app
		 color="primary"
		 dense
		 dark>
			<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
			<v-toolbar-title>PV Pest Solutions</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon href="tel:+16024921056">
				<v-icon>mdi-phone</v-icon>
			</v-btn>
			<router-link to="/" class="header-logo">
				<v-img :src="require('@/assets/logo.png')" alt="PV Pest Logo" width="50" contain></v-img>
			</router-link>
		</v-app-bar>
		<v-navigation-drawer
		 v-model="drawer"
		 absolute
		 temporary>
			<v-list
			 nav
			 dense>
				<v-list-item-group
				 v-model="group"
				 active-class="primary--text text--accent-4">
					<v-list-item to="/">
						<v-list-item-icon>
							<v-icon dense>fas fa-fw fa-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item>
					<!-- <v-list-item to="/pay">
						<v-list-item-icon>
							<v-icon dense>fas fa-fw fa-dollar-sign</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Pay</v-list-item-title>
					</v-list-item> -->
					<v-list-item to="/serviceAreas">
						<v-list-item-icon>
							<v-icon dense>fas fa-fw fa-map-marked-alt</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Service Areas</v-list-item-title>
					</v-list-item>
					<v-list-item to="/about">
						<v-list-item-icon>
							<v-icon dense>fas fa-fw fa-info</v-icon>
						</v-list-item-icon>
						<v-list-item-title>About</v-list-item-title>
					</v-list-item>
					<v-list-item to="/contact">
						<v-list-item-icon>
							<v-icon dense>far fa-fw fa-id-badge</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Contact</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>
<script>
export default {
	name: 'App-Bar',
	data: () => ({
		drawer: false,
		group: null,
	})
};
</script>
<style>
a:hover {
	text-decoration: none !important;
	color: inherit;
}
</style>