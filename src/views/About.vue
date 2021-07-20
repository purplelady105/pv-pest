<template>
	<div class="mt-0 mb-16">
		<v-card flat tile width="100%" class="transparent white--text text-center">
			<div class="text-h2 py-6">About Us</div>
			<video width="70%" height="30%" controls>
				<source :src="require('@/assets/video.mp4')" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		</v-card>
	</div>
</template>