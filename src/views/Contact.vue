<template>
	<div class="mt-0 mb-16">
		<v-card flat tile width="100%" class="transparent white--text text-center">
			<div class="text-h2 font-weight-bold py-6">Contact</div>
		</v-card>
		<v-row v-if="$mq != 'mobile'" class="mx-15">
			<v-card
			 class="transparent my-16"
			 flat>
				<v-layout>
					<v-flex xs6>
						<v-img :src="require('@/assets/office-location.jpg')" max-height="50vh"></v-img>
					</v-flex>
					<v-flex xs6>
						<v-card-text class="white--text pl-16">
							<div class="text-left text-h6 pl-15">
								9950 W Van Buren St Suite 125<br>
								Avondale, AZ 85323<br><br>
								Phone<br>
								<a href="tel:+16024921056" class="text-decoration-none white--text">+1 (602) 492-1056</a><br><br>
								E-Mail<br>
								<a href="mailto:info@pvpest.com?subject=Pest Control Inquiry" class="text-decoration-none white--text">info@pvpest.com</a>
							</div>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
		</v-row>
		<v-row v-else class="pt-0">
			<v-card
			 class="transparent my-2"
			 flat>
				<v-layout>
					<v-flex xs12>
						<v-img :src="require('@/assets/office-location.jpg')" max-height="50vh"></v-img>
					</v-flex>
				</v-layout>
				<v-layout>
					<v-flex xs12>
						<v-card-text class="white--text">
							<div class="text-center text-h6 pt-4">
								9950 W Van Buren St Suite 125<br>
								Avondale, AZ 85323<br><br>
								Phone<br>
								<a href="tel:+16024921056" class="text-decoration-none white--text">+1 (602) 492-1056</a><br><br>
								E-Mail<br>
								<a href="mailto:info@pvpest.com?subject=Pest Control Inquiry" class="text-decoration-none white--text">info@pvpest.com</a>
							</div>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
		</v-row>
	</div>
</template>