<template>
	<div class="mt-0 mb-16">
		<v-card flat tile width="100%" class="transparent primary--text text-center">
			<div class="text-h2 font-weight-bold py-6">Contact</div>
		</v-card>
		<v-row v-if="$mq != 'mobile'" class="mx-15">
			<v-card
			 class="transparent my-16"
			 flat>
				<v-layout>
					<v-flex xs12>
						<v-card-text class="primary--text pl-16">
							<div class="text-center text-h6 pl-15">
								Phone:
								<a href="tel:+16024921056" class="text-decoration-none primary--text">+1 (602) 492-1056</a><br><br>
								E-Mail:
								<a href="mailto:info@pvpest.com?subject=Pest Control Inquiry" class="text-decoration-none primary--text">info@pvpest.com</a>
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
						<v-card-text class="primary--text">
							<div class="text-center text-h6 pt-4">
								Phone<br>
								<a href="tel:+16024921056" class="text-decoration-none primary--text">+1 (602) 492-1056</a><br><br>
								E-Mail<br>
								<a href="mailto:info@pvpest.com?subject=Pest Control Inquiry" class="text-decoration-none primary--text">info@pvpest.com</a>
							</div>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
		</v-row>
	</div>
</template>