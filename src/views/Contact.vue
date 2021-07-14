<template>
  <div class="mt-0 mb-16">
    <v-card flat tile width="100%" class="transparent white--text text-center">
      <div class="text-h2 py-6">Contact</div>
      <!-- <div class="text-left text-h6 pl-15">
        9950 W Van Buren St Suite 125<br>
        Avondale, AZ 85323<br><br>
        Phone<br>
        +1 (602) 492-1056<br><br>
        E-Mail<br>
        info@pvpest.com
      </div> -->
    </v-card>
    <v-row class="mx-15">
      <v-card
       class="transparent my-16"
       flat>
        <v-layout>
          <v-flex xs6>
            <v-img :src="require('@/assets/office-location.jpg')" max-height="50vh"></v-img>
          </v-flex>
          <v-flex xs6>
            <v-card-text class="white--text pl-16">
              <div class="text-left text-h6 pl-15">
                9950 W Van Buren St Suite 125<br>
                Avondale, AZ 85323<br><br>
                Phone<br>
                +1 (602) 492-1056<br><br>
                E-Mail<br>
                info@pvpest.com
              </div>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-row>
  </div>
</template>