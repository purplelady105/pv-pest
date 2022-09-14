<template>
	<div class="mt-0 mb-16">
		<v-card flat tile width="100%" class="transparent primary--text text-center">
			<div v-if="$mq != 'mobile'" class="text-h2 font-weight-bold py-6">About Us</div>
			<div v-else class="text-h4 font-weight-bold py-4">About Us</div>
			<video width="70%" height="30%" controls>
				<source :src="require('@/assets/video.mp4')" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		</v-card>
	</div>
</template>