<template>
	<div class="mt-0 mb-16">
		<v-card flat tile width="100%" class="transparent white--text text-center">
			<div class="text-h2 font-weight-bold py-6">Service Areas</div>
		</v-card>
		<v-row v-if="$mq != 'mobile'" class="mx-15">
			<v-card
			 class="transparent my-16"
			 flat>
				<v-layout>
					<v-flex xs6>
						<v-img :src="require('@/assets/desert.jpg')" max-height="50vh"></v-img>
					</v-flex>
					<v-flex xs6>
						<v-card-text class="white--text pl-16">
							<div class="text-h5 px-2 pb-4 ">
								We serve the following cities: Surprise, Buckeye, Goodyear, Litchfield Park, Tolleson, and Avondale.
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
						<v-img :src="require('@/assets/desert.jpg')" max-height="50vh"></v-img>
					</v-flex>
				</v-layout>
				<v-layout>
					<v-flex xs12>
						<v-card-text class="white--text">
							<div class="text-h5 text-center px-2 pb-4 ">
								We serve the following cities: Surprise, Buckeye, Goodyear, Litchfield Park, Tolleson, and Avondale.
							</div>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
		</v-row>
	</div>
</template>