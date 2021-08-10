<template>
    <v-app>
        <AppBar v-if="$mq != 'mobile'" />
        <MobileAppBar v-else />
        <v-main class="primary">
            <v-banner v-model="covidAlert" color="accent" sticky>
                <span class="font-weight-bold">Our response to COVID-19</span> We are closely adhering to current CDC guidelines and require our employees to wear masks and gloves at all times during appointments, sanitize vehicles/equipment, and maintain a distance of no less than 6 feet when conducting service indoors.
                <v-spacer></v-spacer>
                <template v-slot:actions="{ dismiss }">
                    <v-btn icon @click="dismiss" color="#000">
                        <v-icon small>fas fa-times</v-icon>
                    </v-btn>
                </template>
            </v-banner>
            <router-view />
        </v-main>
        <v-card flat tile width="100%" class="lime darken-3 white--text text-center pa-2">
            <v-icon color="white" class="pt-6" size="60px">fab fa-envira</v-icon>
            <div class="text-h3 font-weight-bold py-4">Eco-Friendly</div>
            <div class="text-h5 pb-4">We use a combination of Environmentally Friendly and Organic products that are used in Healthcare Facilities and Schools.</div>
        </v-card>
        <v-card flat tile width="100%" class="accent white--text text-center pa-2">
            <div class="text-h3 font-weight-bold pt-6">Schedule your service today!</div>
            <v-btn v-if="$mq != 'mobile'" href="mailto:info@pvpest.com?subject=Pest Control Inquiry" color="white" outlined rounded elevation="5" class="my-8 pa-9">
                <span style="font-size: 2em">Contact Us</span>
            </v-btn>
            <v-btn v-else href="mailto:info@pvpest.com?subject=Pest Control Inquiry" color="white" outlined rounded elevation="5" class="my-8 pa-9" width="75%">
                <span style="font-size: 2em">Contact Us</span>
            </v-btn>
        </v-card>
        <AppFooter v-if="$mq != 'mobile'" />
        <MobileFooter v-else />
    </v-app>
</template>
<script>
import AppBar from './components/AppBar.vue'
import MobileAppBar from './components/mobile/AppBar.vue'
import AppFooter from './components/Footer.vue'
import MobileFooter from './components/mobile/Footer.vue'
export default {
    name: 'App',
    components: {
        AppBar,
        MobileAppBar,
        AppFooter,
        MobileFooter
    },
    data: () => ({
        covidAlert: true
    }),
    methods: {
        dismiss() {
            this.covidAlert = false;
        }
    }
};
</script>
<style>
a:hover {
    text-decoration: none !important;
    color: inherit;
}
</style>