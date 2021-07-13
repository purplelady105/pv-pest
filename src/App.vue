<template>
  <v-app>
    <font-awesome-icon icon="user-secret" />
    <v-app-bar
     app
     color="primary"
     dark>
      <div class="d-flex align-center">
        <router-link to="/" class="header-logo">
          <v-img :src="require('@/assets/logo.png')" alt="PV Pest Logo" width="85" contain></v-img>
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
       icon
       color="white">
        <v-icon>fab fa-fw fa-instagram</v-icon>
      </v-btn>
      <v-btn
       icon
       color="white">
        <v-icon>fab fa-fw fa-facebook-f</v-icon>
      </v-btn>
      <v-btn
       href="https://github.com/vuetifyjs/vuetify/releases/latest"
       target="_blank"
       color="accent"
       outlined
       rounded
       elevation="5"
       medium>
        <span class="mr-2">Call Now</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
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