<template>
  <v-container class="pa-4 text-center">
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(item, i) in rates">
        <v-col
          :key="i"
          cols="12"
          md="5"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              shaped
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :lazy-src="item.img"
                :src="item.img"
                height="225px"
              >
                <v-card-title class="text-h6 white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 ml-2 subheading text-left">
                      {{ item.price }}
                    </p>

                    <div class="align-self-center mt-5">
                      <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">
                        {{ item.category }}
                      </p>
                      <p class="text-caption font-weight-medium font-italic text-left">
                        {{ item.date }}
                      </p>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      rates:[
          {
              price: "P999",
              category: "Adult - Weekend",
              date: "Fridays, Saturdays, Sundays & Public Holidays",
              img: "https://www.wallpaperflare.com/static/48/77/291/swimming-pool-hotel-white-black-wallpaper.jpg"
          },
          {
              price: "P799",
              category: "Adult - Weekday",
              date: "Wednesday, Thursdays",
              img: "https://wallpapercave.com/wp/z7AEJ7W.jpg"
          },
          {
              price: "P599",
              category: "Kid - Weekend",
              date: "Fridays, Saturdays, Sundays & Public Holiday",
               img: "https://wallpaperaccess.com/full/1700237.jpg"
          },
          {
              price: "P499",
              category: "Kid - Weekday",
              date: "Wednesdays, Thursdays",
              img: "https://www.setaswall.com/wp-content/uploads/2017/12/Beach-Resort-Wallpaper-40-1600x900.jpg"
          }
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>



<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>