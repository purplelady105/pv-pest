<template>
    <v-footer dark padless>
        <v-card flat tile width="100%" class="darkGrey white--text text-center pt-16">
            <v-card-text class="pb-16 text-left text-md-center">
                <v-layout>
                    <div class="col-md-4 col-12 elevation-0">
                        <div class="text-h6 font-weight-bold">Location</div>
                        <div class="text-h6 mt-5">
                            9950 W. Van Buren Street Suite 125<br>
                            Avondale, AZ 85323
                        </div>
                    </div>
                    <div class="col-md-4 col-12 elevation-0">
                        <div class="text-h6 font-weight-bold">Hours</div>
                        <div class="text-h6 mt-5">
                            Monday — Friday<br>8am — 4:30pm
                            <v-divider></v-divider>
                            Saturday | Sunday<br>Closed
                        </div>
                    </div>
                    <div class="col-md-4 col-12 elevation-0">
                        <div class="text-h6 font-weight-bold">Contact</div>
                        <div class="text-h6 mt-5">
                            <a href="mailto:info@pvpest.com?subject=Pest Control Inquiry" class="text-decoration-none softGrey--text">info@pvpest.com</a><br>
                            <a href="tel:+16024921056" class="text-decoration-none softGrey--text">(602) 492-1056</a>
                            <br>
                            <v-btn href="https://www.instagram.com/pvpest.solutions/" target="_blank" icon color="softGrey">
                                <v-icon>fab fa-fw fa-instagram</v-icon>
                            </v-btn>
                            <v-btn href="https://www.facebook.com/pvpestsolutions" target="_blank" icon color="softGrey">
                                <v-icon>fab fa-fw fa-facebook-f</v-icon>
                            </v-btn>
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
    name: 'Footer',
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