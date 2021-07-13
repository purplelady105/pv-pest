<template>
  <v-app>
    <font-awesome-icon icon="user-secret" />
    <v-app-bar
     app
     color="primary"
     flat
     prominent
     dark>
      <div class="d-flex align-center">
        <router-link to="/" class="header-logo">
          <v-img :src="require('@/assets/logo.png')" alt="PV Pest Logo" width="125" contain></v-img>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link to="/pay">
        <v-btn
         text
         color="softGrey">
          Pay
        </v-btn>
      </router-link>
      <router-link to="/pay">
        <v-btn
         text
         color="softGrey">
          Service Areas
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn
         text
         color="softGrey">
          About
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn
         text
         color="softGrey">
          Contact
        </v-btn>
      </router-link>
      <v-btn
       href="https://www.instagram.com/pvpest.solutions/"
       target="_blank"
       icon
       color="white">
        <v-icon>fab fa-fw fa-instagram</v-icon>
      </v-btn>
      <v-btn
       href="https://www.facebook.com/pvpestsolutions"
       target="_blank"
       icon
       color="white">
        <v-icon>fab fa-fw fa-facebook-f</v-icon>
      </v-btn>
      <v-btn
       href="tel:+16024921056"
       color="accent"
       outlined
       rounded
       elevation="5"
       class="mt-2"
       medium>
        Call Now
      </v-btn>
    </v-app-bar>
    <v-main class="mt-16 primary">
      <router-view />
    </v-main>
    <v-card flat tile width="100%" class="accent white--text text-center pa-5">
      <div class="text-h3 font-weight-bold py-6">Schedule service today!</div>
      <v-btn
       href="mailto:info@pvpest.com?subject=Pest Control Inquiry"
       color="white"
       outlined
       rounded
       elevation="5"
       class="my-10 pa-9">
        <span class="text-h3">Contact Us</span>
      </v-btn>
    </v-card>
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
            <!-- <v-divider vertical></v-divider> -->
            <div class="col-md-4 col-12 elevation-0">
              <div class="text-h6 font-weight-bold">Hours</div>
              <div class="text-h6 mt-5">
                Monday — Friday<br>7am — 5pm
                <v-divider></v-divider>
                Saturday<br>7am — 4pm
                <v-divider></v-divider>
                Sunday<br>Closed
              </div>
            </div>
            <!-- <v-divider vertical></v-divider> -->
            <div class="col-md-4 col-12 elevation-0">
              <div class="text-h6 font-weight-bold">Contact</div>
              <div class="text-h6 mt-5">
                <a href="mailto:info@pvpest.com?subject=Pest Control Inquiry" class="text-decoration-none softGrey--text">info@pvpest.com</a><br>
                <a href="tel:+16024921056" class="text-decoration-none softGrey--text">(602) 492-1056</a>
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
  </v-app>
</template>
<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
a:hover {
  text-decoration: none !important;
  color: inherit;
}
</style>