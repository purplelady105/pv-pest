<template>
	<v-footer dark padless>
		<v-card flat tile width="100%" class="darkGrey white--text text-center">
			<v-card-text class="text-left text-md-center">
				<v-row>
					<v-col>
						Hours: M-F 8AM-4:30PM | Sat-Sun Closed
					</v-col>
					<v-col>
						Contact: <a href="mailto:info@pvpest.com?subject=Pest Control Inquiry" class="text-decoration-none softGrey--text">info@pvpest.com</a> | <a href="tel:+16024921056" class="text-decoration-none softGrey--text">(602) 492-1056</a>
					</v-col>
				</v-row>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-text class="white--text">
				<v-icon small>far fa-copyright</v-icon> {{ new Date().getFullYear() }} - <strong>PV Pest Solutions</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>
<script>
export default {
	name: 'Footer',
	data: () => ({
		//
	}),
	methods: {
		//
	}
};
</script>
<style scoped>
</style>