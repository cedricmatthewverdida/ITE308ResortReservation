<template>

  <v-app>
    <v-main>
      <NavBar/>
      
     
      <slot/>
      
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from '~/components/navigation.vue'
import Footer from '~/components/footer.vue'
export default {
  components:{
    NavBar,
    Footer
  }
}


</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
