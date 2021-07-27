<template>
	<div>
		<v-row v-if="$mq != 'mobile'" class="text-left white--text mx-15 my-16">
			<span style="font-size: 5em" class="font-weight-bold">Serving The West Valley & Maricopa County</span>
			<span style="font-size: 4em" class="font-weight-bold mt-6">We Offer Guaranteed Year Round Residential Pest Protection</span>
		</v-row>
		<v-row v-else class="px-6 text-center white--text my-2">
			<span style="font-size: 2.1em" class="font-weight-bold">Serving The West Valley & Maricopa County</span>
			<span style="font-size: 2em" class="font-weight-bold mt-2">We Offer Guaranteed Year Round Residential Pest Protection</span>
		</v-row>
		<!-- ABOUT US SECTION -->
		<v-row v-if="$mq != 'mobile'" class="mx-15 pt-16">
			<v-card
			 class="transparent my-16"
			 flat>
				<v-layout>
					<v-flex xs6>
						<v-img :src="require('@/assets/white-square-house.jpg')" max-height="50vh"></v-img>
					</v-flex>
					<v-flex xs6>
						<v-card-title primary-title class="white--text pl-16">
							<div>
								<span class="text-h3">About Us</span>
							</div>
						</v-card-title>
						<v-card-text class="white--text pl-16">
							<span class="text-h4">We are a locally owned pest control company that is proud to offer residential & commercial pest control services to the residents of Goodyear, Avondale, Litchfield Park & surrounding areas.</span>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
		</v-row>
		<MobileAbout v-else />
		<!-- FIRST ROW OF PEST AVATARS -->
		<v-row justify="space-around" class="pt-16 mt-16 mb-0 softGrey">
			<span v-if="$mq === 'mobile'" class="text-h4 text-center pa-6 pt-0">Tap each image to view fun facts</span>
			<v-avatar
			 size="300" class="mb-6"
			 @click="openTriviaDialog(0)">
				<v-img :src="require('@/assets/ants-300x300.jpg')"></v-img>
			</v-avatar>
			<v-avatar
			 size="300" class="mb-6"
			 @click="openTriviaDialog(1)">
				<v-img :src="require('@/assets/scorpion.jpg')"></v-img>
			</v-avatar>
			<v-avatar
			 size="300" class="mb-6"
			 @click="openTriviaDialog(2)">
				<v-img :src="require('@/assets/black-widow.jpg')"></v-img>
			</v-avatar>
		</v-row>
		<!-- SECOND ROW OF PEST AVATARS -->
		<v-row justify="space-around" class="pb-16 mt-0 mb-16 softGrey">
			<v-avatar
			 size="300" class="mb-6"
			 @click="openTriviaDialog(3)">
				<v-img :src="require('@/assets/cockroaches-300x300.jpg')"></v-img>
			</v-avatar>
			<v-avatar
			 size="300" class="mb-6"
			 @click="openTriviaDialog(4)">
				<v-img :src="require('@/assets/tick.jpg')"></v-img>
			</v-avatar>
			<v-avatar
			 size="300" class="mb-6"
			 @click="openTriviaDialog(5)">
				<v-img :src="require('@/assets/spider.jpg')"></v-img>
			</v-avatar>
		</v-row>
		<!-- CUSTOMER TESTIMONIALS -->
		<v-row v-if="$mq != 'mobile'" class="mx-15">
			<v-card
			 class="transparent my-16"
			 flat>
				<v-layout>
					<v-flex xs6>
						<v-card-text class="white--text">
							<div>
								<span class="text-h4 text-wrap">"We are so happy with PV Pest Solutions! Their commitment to providing outstanding customer service is unmatched."</span>
							</div>
							<span class="text-h5">- Paula G.</span>
						</v-card-text>
					</v-flex>
					<v-flex xs6>
						<v-card-text class="white--text">
							<div>
								<span class="text-h4">"Excellent service. Our technician Joe was very thorough and made sure all of our concerns were addressed. Would highly recommend."</span>
							</div>
							<span class="text-h5">- Deborah S.</span>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
		</v-row>
		<v-row v-else class="pa-5 pb-16">
			<v-card
			 class="transparent"
			 flat>
				<v-layout>
					<v-flex xs12>
						<v-card-text class="white--text text-center">
							<div>
								<span class="text-h4 text-wrap">"We are so happy with PV Pest Solutions! Their commitment to providing outstanding customer service is unmatched."</span>
							</div>
							<span class="text-h5">- Paula G.</span>
							<div class="pt-10">
								<span class="text-h4">"Excellent service. Our technician Joe was very thorough and made sure all of our concerns were addressed. Would highly recommend."</span>
							</div>
							<span class="text-h5">- Deborah S.</span>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
		</v-row>
		<v-dialog
		 v-model="triviaDialog"
		 :fullscreen="$mq === 'tablet' || $mq === 'mobile'"
		 persistent
		 max-width="40vw">
			<v-card>
				<v-card-title class="helperDialogTitleClass" primary-title>
					{{ triviaTitle }}
					<v-spacer></v-spacer>
					<v-btn icon @click="triviaDialog = false" color="#FFF">
						<v-icon>fas fa-times</v-icon>
					</v-btn>
				</v-card-title>
				<v-card-text class="px-5 text-center">
					<v-flex xs12 style="font-size: 2em">
						<br>
						<br>
						{{ triviaText }}
					</v-flex>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
import MobileAbout from './mobile/About.vue';
export default {
	name: 'HelloWorld',
	components: {
		MobileAbout
	},
	data: () => ({
		triviaDialog: false,
		triviaTitle: null,
		triviaText: null,
		triviaTopics: [
			{ title: 'Ants', text: 'Ants in your pants.' },
			{ title: 'Scorpions', text: 'Scorpions are the worst.' },
			{ title: 'Black Widows', text: "I'm gonna love ya, until you hate me." },
			{ title: 'Cockroaches', text: 'They can survive a nuclear explosion.' },
			{ title: 'Ticks', text: 'Basically just human fleas.' },
			{ title: 'Spiders', text: 'Eight legged freaks!' }
		]
	}),
	methods: {
		openTriviaDialog(value) {
			// DISABLE TRIVIA POP UP UNTIL WE GET REAL VERBIAGE
			// this.triviaDialog = true;
			// this.triviaTitle = this.triviaTopics[value].title;
			// this.triviaText = this.triviaTopics[value].text;
		}
	}
};
</script>
<style scoped>
.helperDialogTitleClass {
	background-color: #424242 !important;
	color: #FFF !important;
	font-size: 2em;
}
</style>