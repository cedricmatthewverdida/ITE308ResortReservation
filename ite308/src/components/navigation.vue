<template>
    <v-app-bar
    src="https://i.pinimg.com/originals/b2/6e/cd/b26ecd3f9d7bc39790bc5119d0430cea.jpg"
    fade-img-on-scroll
    dark
    >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Evelyn Water Park</v-toolbar-title>
        
        <v-spacer></v-spacer>

        <v-btn
        v-for="(platform,key) in socialmedia"
        :key="key"
        icon
        >
            <v-icon>
                {{platform.icon}}
            </v-icon>
        </v-btn>
        
        <template v-slot:extension>
        <v-tabs
        color="primary"
        v-model="activeTab"
        >
                <v-tab v-for="tab in routes" :key="tab.id" :to="tab.link" style="text-transform:none;">
                     
                    

                    <v-icon small class="mr-2">{{tab.icon}}</v-icon>
                    <span class="caption white--text">{{ tab.title }}</span>

                </v-tab>

                <v-tabs-items v-model="activeTab" @change="updateRouter($event)">
                    <v-tab-item v-for="tab in routes" :key="tab.id" :to="tab.link">
                        <router-view />          
                    </v-tab-item>
                </v-tabs-items>
        </v-tabs>
        </template>

    </v-app-bar>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: '',
                routes: [


                    {
                        id: 1,
                        title: 'Home',
                        icon: 'mdi-home',
                        link: '/'
                    },

                    {
                        id: 2,
                        title: 'Attraction',
                        icon: 'mdi-slide',
                        link: '/attraction'
                    },

                    {
                        id: 3,
                        title: 'Gallery',
                        icon: 'mdi-image-filter-hdr',
                        link: '/gallery'
                    },

                    {
                        id:4,
                        title: 'Promos',
                        icon: 'mdi-sale',
                        link: '/promos'
                    },
                
                ],

                socialmedia:[
                    {
                        icon: 'mdi-facebook',
                        link: 'facebook.com'
                    },
                    {
                        icon: 'mdi-instagram',
                        link: 'instagram.com'
                    },
                    {
                        icon: 'mdi-twitter',
                        link: 'twitter.com'
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>