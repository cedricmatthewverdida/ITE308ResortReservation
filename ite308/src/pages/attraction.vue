<template>
    <Layout>
        <v-card
        dark
        class="modified">
            <v-card-text class="container">
                <h1 class="text-center mt-5" style="font-family: 'Exo';font-size: 50px;">Attractions</h1>
                <h3 class="text-center mt-5 overline">Spot your favorite spot!</h3>
                <p class="text-center pa-5">

                Our number one goal is to make sure visitors have the time of their lives. We offer fun activities for visitors of all ages. Our slides are enough to unleash your inner child — and ensure that you have an unforgettable experience.
                </p>
            </v-card-text>
        </v-card>
        
        <v-card
        dark
        class="modified pa-5"
        >
            <v-card-text class="container">
                <v-carousel v-model="model">
                    <v-carousel-item
                    v-for="(item, i) in attraction"
                    :key="i"
                    >
                    <v-img
                    :lazy-src="item.img"
                    :src="item.img"
                    height="100%"
                    >
                   
                         <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                         
                        <div class="text-h2 pa-5" style="background:#000">
                            {{item.title}}
                        </div>

                        
                        </v-row>
                    </v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-card-text>
        </v-card>
    </Layout>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      attraction:[
          {
              title: 'The Clone',
              desc: 'The Cyclone is the largest water slide in the Philippines! It is a huge conical steel fibreglass structure 20 meters in diameter, which can accommodate a four person raft which drops from a six storey launch tube. Riders experience near vertical spins and wallops as the raft swings on the funnel walls.',
              img: 'https://static.wixstatic.com/media/bd1727_90bf33e0607f4c82b3d86af77167b4cb~mv2.jpg/v1/fill/w_575,h_575,al_c,q_80,usm_0.66_1.00_0.01/DSC_0013_1_JPG.webp'
          },
          {
              title: 'The Captain Kidd’s',
              desc: 'The Captain Kidd’s Hideout kiddie pool and slides and the “Pirates of Caraibes” aqua playhouse is for the young and old who just want to have safe, clean fun in a shallow rubber lined pool.',
              img: 'https://static.wixstatic.com/media/bd1727_8b60cbd58bdc4de8b0048726337a6bb3~mv2_d_5901_3319_s_4_2.jpg/v1/fill/w_575,h_575,al_c,q_80,usm_0.66_1.00_0.01/Captain_Kidd%E2%80%99s_Hideout.webp'
          },
          {
              title: 'The Pacific Racer',
              desc: 'The Pacific Racer is a three tube speed challenge slide where participants race against each other using special rubber mats as they launch from a height of 15 meters into claustrophobic spiral tubes leading to high speed exit 100 meters away.',
              img: 'https://static.wixstatic.com/media/bd1727_237636dca443424b8d04d74379a70a18~mv2_d_6000_4000_s_4_2.jpg/v1/crop/x_713,y_0,w_4209,h_4000/fill/w_605,h_575,al_c,q_80,usm_0.66_1.00_0.01/Pacific%20Racer%20-%20Closer%20Shot_JPG.webp'
          },
          
      ]
    }),
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