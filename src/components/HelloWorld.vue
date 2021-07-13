<template>
  <v-container>
    <v-row class="text-left white--text">
      <span class="text-h1 font-weight-bold">Serving The West Valley & Maricopa County</span>
      <span class="text-h2 font-weight-bold mt-6">We Offer Guaranteed Year Round Residential Pest Protection.</span>
    </v-row>
    <v-row>
      <v-card
       class="transparent my-16"
       flat>
        <v-layout>
          <v-flex xs6>
            <v-img :src="require('@/assets/white-square-house.jpg')" max-height="50vh"></v-img>
          </v-flex>
          <v-flex xs6>
            <v-card-title primary-title class="white--text">
              <div>
                <span class="text-h3">About Us</span>
              </div>
            </v-card-title>
            <v-card-text class="white--text">
              <span class="text-h4">PV Pest Solutions is proud to offer residential & commercial pest control services to the residents of Goodyear, Avondale, & Litchfield Park AZ.</span>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-row>
    <v-row justify="space-around" class="my-16">
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
    <v-row justify="space-around" class="my-16">
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
    <v-dialog
     v-model="triviaDialog"
     width="500px">
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
    </v-dialog>
  </v-container>
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