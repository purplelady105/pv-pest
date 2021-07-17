<template>
	<div class="my-16">
		<v-row class="text-left white--text mx-15">
			<span style="font-size: 6em" class="font-weight-bold">Serving The West Valley & Maricopa County</span>
			<span class="text-h2 font-weight-bold mt-6">We Offer Guaranteed Year Round Residential Pest Protection.</span>
		</v-row>
		<!-- ABOUT US SECTION -->
		<v-row class="mx-15 pt-16">
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
							<span class="text-h4">PV Pest Solutions is proud to offer residential & commercial pest control services to the residents of Goodyear, Avondale, & Litchfield Park AZ.</span>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
		</v-row>
		<!-- FIRST ROW OF PEST AVATARS -->
		<v-row justify="space-around" class="py-16 mt-16 mb-0 softGrey">
			<v-avatar
			 size="300"
			 @click="openTriviaDialog(0)">
				<v-img :src="require('@/assets/ants-300x300.jpg')"></v-img>
			</v-avatar>
			<v-avatar
			 size="300"
			 @click="openTriviaDialog(1)">
				<v-img :src="require('@/assets/scorpion.jpg')"></v-img>
			</v-avatar>
			<v-avatar
			 size="300"
			 @click="openTriviaDialog(2)">
				<v-img :src="require('@/assets/black-widow.jpg')"></v-img>
			</v-avatar>
		</v-row>
		<!-- SECOND ROW OF PEST AVATARS -->
		<v-row justify="space-around" class="pb-16 mt-0 mb-16 softGrey">
			<v-avatar
			 size="300"
			 @click="openTriviaDialog(3)">
				<v-img :src="require('@/assets/cockroaches-300x300.jpg')"></v-img>
			</v-avatar>
			<v-avatar
			 size="300"
			 @click="openTriviaDialog(4)">
				<v-img :src="require('@/assets/tick.jpg')"></v-img>
			</v-avatar>
			<v-avatar
			 size="300"
			 @click="openTriviaDialog(5)">
				<v-img :src="require('@/assets/spider.jpg')"></v-img>
			</v-avatar>
		</v-row>
		<!-- CUSTOMER TESTIMONIALS -->
		<v-row class="mx-15">
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
		<!-- TRIVIA DIALOG POPUP -->
		<!-- <v-dialog
		 v-model="triviaDialog"
		 :fullscreen="$vuetify.breakpoint.mobile"
		 height="100vh">
			<v-toolbar color="primary" dark>
				<v-toolbar-title>Trivia: {{ triviaTitle }}</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn icon @click="triviaDialog = false">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-toolbar>
			<v-card min-height="255">
				<v-card-text class="text-h4 text-center">
					<v-layout row>
						<v-flex xs10 class="py-16 mx-auto">
							{{ triviaText }}
						</v-flex>
					</v-layout>
				</v-card-text>
			</v-card>
		</v-dialog> -->
		<v-dialog
		 v-model="triviaDialog"
		 :fullscreen="$mq === 'tablet' || $mq === 'mobile'"
		 persistent
		 max-width="40vw">
			<v-card>
				<!-- <v-card-title class="helperDialogTitleClass" primary-title>
					<v-layout row>
						<v-flex class="pt-2 hidden-sm-and-down" text-xs-left shrink>{{ triviaTitle }}</v-flex>
						<v-flex class="hidden-md-and-up" text-xs-left shrink>
							{{ triviaTitle }}
						</v-flex>
						<v-flex grow text-right>
							<v-icon @click="triviaDialog = false" color="#FFF">
								fas fa-times
							</v-icon>
						</v-flex>
					</v-layout>
				</v-card-title> -->
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
export default {
	name: 'HelloWorld',

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
			this.triviaDialog = true;
			this.triviaTitle = this.triviaTopics[value].title;
			this.triviaText = this.triviaTopics[value].text;
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