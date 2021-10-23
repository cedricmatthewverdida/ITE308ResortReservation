<template>
    <Layout>
        <v-card
        dark
        class="modified"
        >
        
            <v-card class="container" shaped>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-img 
                            style="border-radius: 40%;"
                            height="500"
                            width="700"
                            src="https://wallpaperaccess.com/full/2492037.jpg"/>
                        </v-col>
                            <v-col>
                                <h1 class="text-center mt-15" style="font-family: 'Exo';font-size: 50px;">Summer Splash</h1>
                                <h3 class="text-center mt-5">
                                    P499
                                </h3>
                                <p class="text-center pa-5">
                                    
                                Open to all walk-in guests. Purchase 1 ticket of 499 Entrance and Swim; Includes entry to waterpark, access to Buccaneer Bay wave pool, Mighty Maui Lazy River and Captain Kidd’s Pool only. Optional add on 299 to Entrance to includes all 8 extreme slides.
                                </p>
                                
                            </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <v-card class="container" shaped>
            <v-card-text>
                <v-row>
                    
                    <v-col>
                        <h1 class="text-center mt-15" style="font-family: 'Exo';font-size: 50px;">Group Discount</h1>
                        <h3 class="text-center mt-5">
                        P499
                        </h3>
                        <p class="text-center pa-5">
                                

Are you a group of 20? Get 10% off when you purchase your tickets onsite, Seven Seas Waterpark & Resort
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
        
        </v-card>
    </Layout>
</template>

<script>
  export default {
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