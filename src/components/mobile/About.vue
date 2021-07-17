<template>
	<div>
		<v-row class="pt-0">
			<v-card
			 class="transparent my-2"
			 flat>
				<v-layout>
					<v-flex xs12>
						<v-img :src="require('@/assets/white-square-house.jpg')" max-height="50vh"></v-img>
					</v-flex>
				</v-layout>
				<v-layout>
					<v-flex xs12>
						<v-card-title primary-title class="white--text">
							<span style="font-size: 2em" class="font-weight-bold mx-auto">About Us</span>
						</v-card-title>
						<v-card-text class="white--text text-center px-6">
							<span class="text-h4">PV Pest Solutions is proud to offer residential & commercial pest control services to the residents of Goodyear, Avondale, & Litchfield Park AZ.</span>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
		</v-row>
	</div>
</template>

<script>
export default {
	name: 'Mobile-About',
	data: () => ({
		//
	}),
	methods: {
		//
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