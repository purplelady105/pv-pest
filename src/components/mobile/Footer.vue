<template>
	<v-footer dark padless>
		<v-card flat tile width="100%" class="darkGrey white--text text-center pt-2">
			<v-card-text class="pb-2 text-center">
				<v-layout>
					<div class="col-md-4 col-12 elevation-0">
						<div class="text-h6 font-weight-bold">Location</div>
						<div class="text-h6 mt-5">
							9950 W. Van Buren Street<br>
							Suite 125<br>
							Avondale, AZ 85323
						</div>
					</div>
				</v-layout>
				<v-divider></v-divider>
				<v-layout>
					<div class="col-md-4 col-12 elevation-0">
						<div class="text-h6 font-weight-bold">Hours</div>
						<div class="text-h6 mt-5">
							Monday — Friday<br>
							7am — 5pm<br>
							Saturday<br>
							7am — 4pm<br>
							Sunday<br>
							Closed
						</div>
					</div>
				</v-layout>
				<v-divider></v-divider>
				<v-layout>
					<div class="col-md-4 col-12 elevation-0">
						<div class="text-h6 font-weight-bold">Contact</div>
						<div class="text-h6 mt-5">
							<a href="mailto:info@pvpest.com?subject=Pest Control Inquiry" class="text-decoration-none softGrey--text">info@pvpest.com</a><br>
							<a href="tel:+16024921056" class="text-decoration-none softGrey--text">(602) 492-1056</a>
						</div>
					</div>
				</v-layout>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-text class="white--text">
				{{ new Date().getFullYear() }} — <strong>PV Pest Solutions</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>
<script>
export default {
	name: 'Mobile-Footer',
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