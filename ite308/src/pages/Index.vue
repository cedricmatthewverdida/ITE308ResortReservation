<template>
  <Layout>

  <v-parallax
        dark
        src="https://wallpaperaccess.com/full/1933640.jpg"
  >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <h1 
            style="
            font-size: 70px;
            font-family: 'Exo';
            "
            >
              Evelyn Water Park
            </h1>

            <v-btn
            outlined
            large
            rounded
            color="white"
            >
              Book Now
            </v-btn>

          </v-col>
        </v-row>

  </v-parallax>

  <v-card
  class="modified"
  dark
  >

    <v-card-text>
      <h1 class="text-center mt-5" style="font-family: 'Exo';font-size: 50px;">Rates</h1>
      <h3 class="text-center mt-5 caption">Book online for best price!</h3>
      <Rates/>
    </v-card-text>

  </v-card>

  <v-card
  class="modified"
  dark
  >

  <v-card-text >
    <v-row class="mt-5">
      <v-col>
        <h1 class="text-center mt-5" style="font-family: 'Exo';font-size: 50px;">About Us</h1>
        <h3 class="text-center mt-5">Seas the adventure & make unforgettable memories!</h3>
        <p class="text-center pa-5">

          Evelyn Water Park is the first world-class

pirate-themed waterpark in the Philippines. Established in November 2017, the waterpark boasts of state-of-the-art facilities with over 12 thrilling slides, a 5,000 square meter dual wave pool, 400 meter long lazy river, and many more family friendly attractions and amenities.
        <v-btn
        large
        outlined
        class="mt-5"
        rounded
        >
          View more photos
        </v-btn>
        </p>
      </v-col>
      <v-col>
        <v-img 
        style="border-radius: 40%;"
        height="500"
        width="700"
        src="https://wallpaperaccess.com/full/2492037.jpg"/>
      </v-col>
    </v-row>
  </v-card-text>

  </v-card>

  </Layout>
</template>

<script>
import Rates from '~/components/rates.vue'
export default {
  components:{
    Rates
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@900&display=swap');
.v-parallax__image{
filter: brightness(70%);
}

.modified{
background-color: #111927;
    background-image: 
        radial-gradient(at 47% 33%, hsl(240.00, 49%, 12%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%);
}
</style>