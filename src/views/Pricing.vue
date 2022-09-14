<template>
	<div class="mt-0 mb-16">
		<v-row v-if="$mq != 'mobile'" class="mx-15">
			<v-card flat tile width="100%" class="transparent primary--text text-center">
				<div class="text-h2 font-weight-bold py-6">Pest Control Pricing</div>
			</v-card>
			<v-card class="my-16 mx-auto" flat width="60vw">
				<v-row>
					<v-col cols="12">
						<v-card-text class="primary--text">
							<div class="text-h5">
								<strong>Contract Pricing</strong>
							</div>
							<div>Initial Service Cost of $99.00. (1 year contract required) $50.00 cancellation fee if service is cancelled before the contract end date.</div>
							<v-divider color="#012351" class="my-2"></v-divider>
							<div class="pricingTitle">One Time Service</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Residential</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$149.00</div>
								</v-col>
							</v-row>
							<div class="pricingTitle">Monthly Pest Control</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Starting price for homes up to 1,800 sq. ft.</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$40.00</div>
								</v-col>
							</v-row>
							<div class="pricingTitle">Bi-Monthly Pest Control</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Starting price for homes up to 1,800 sq. ft.</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$64.00</div>
								</v-col>
							</v-row>
							<div class="pricingTitle">Quarterly Pest Control</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Starting price for homes up to 1,800 sq. ft.</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$84.00</div>
								</v-col>
							</v-row>
						</v-card-text>
					</v-col>
				</v-row>
			</v-card>
			<!-- SPECIAL SERVICES -->
			<!-- <v-card class="my-16" flat width="45vw">
				<v-row>
					<v-col cols="12">
						<v-card-text class="primary--text">
							<div class="text-h5">
								<strong>Special Services</strong>
							</div>
							<div>Initial Service Cost of $150.00. (1 year contract required and must be on AutoPay) $90.00 cancellation fee if service is cancelled before the contract end date.</div>
							<v-divider color="#012351" class="my-2"></v-divider>
							<div class="pricingTitle">Rodents</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Additonal $15 quarterly</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$30.00*</div>
								</v-col>
							</v-row>
							<div class="pricingTitle">German Roaches</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Additonal $15 quarterly</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$30.00*</div>
								</v-col>
							</v-row>
							<div class="pricingTitle">Scorpions</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">No extra fee beyond initial service fee</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$5.00*</div>
								</v-col>
							</v-row>
							<div class="pricingTitle">Organic</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Additonal $10 quarterly</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$5.00*</div>
								</v-col>
							</v-row>
							<div>*In addition to initial service fee</div>
						</v-card-text>
					</v-col>
				</v-row>
			</v-card> -->
		</v-row>
		<v-row v-else class="pt-2">
			<v-card flat tile width="100%" class="transparent primary--text text-center">
				<div class="text-h4 font-weight-bold py-4">Pest Control Pricing</div>
			</v-card>
			<v-card class="my-4 mx-auto" flat width="90vw">
				<v-row>
					<v-col cols="12">
						<v-card-text class="primary--text">
							<div class="mobileFontHeader">
								<strong>Contract Pricing</strong>
							</div>
							<div class="mobileFontSubHeader">Initial Service Cost of $99.00. (1 year contract required) $50.00 cancellation fee if service is cancelled before the contract end date.</div>
							<v-divider color="#012351" class="my-2"></v-divider>
							<div class="pricingTitle">One Time Service</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Residential</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$149.00</div>
								</v-col>
							</v-row>
							<div class="pricingTitle">Monthly Pest Control</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Starting price for homes up to 1,800 sq. ft.</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$40.00</div>
								</v-col>
							</v-row>
							<div class="pricingTitle">Bi-Monthly Pest Control</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Starting price for homes up to 1,800 sq. ft.</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$64.00</div>
								</v-col>
							</v-row>
							<div class="pricingTitle">Quarterly Pest Control</div>
							<v-row>
								<v-col cols="8" class="text-left">
									<div class="pricingSubTitle">Starting price for homes up to 1,800 sq. ft.</div>
								</v-col>
								<v-col cols="4" class="text-right">
									<div class="pricingSubTitle">$84.00</div>
								</v-col>
							</v-row>
						</v-card-text>
					</v-col>
				</v-row>
			</v-card>
		</v-row>
	</div>
</template>
<style scoped>
.pricingTitle {
	font-size: 1.5em;
	font-weight: 500;
}

.pricingSubTitle {
	font-size: 1.4em;
	font-weight: 300;
}

.mobileFontHeader {
	font-size: 2em;
}

.mobileFontSubHeader {
	font-size: 1.5em;
}
</style>