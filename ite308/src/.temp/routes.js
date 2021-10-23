const c1 = () => import(/* webpackChunkName: "page--src-pages-promos-vue" */ "D:\\serious_projects\\group3_resortreservation\\ite308\\src\\pages\\promos.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-gallery-vue" */ "D:\\serious_projects\\group3_resortreservation\\ite308\\src\\pages\\gallery.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\serious_projects\\group3_resortreservation\\ite308\\src\\pages\\About.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-attraction-vue" */ "D:\\serious_projects\\group3_resortreservation\\ite308\\src\\pages\\attraction.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\serious_projects\\group3_resortreservation\\ite308\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\serious_projects\\group3_resortreservation\\ite308\\src\\pages\\Index.vue")

export default [
  {
    path: "/promos/",
    component: c1
  },
  {
    path: "/gallery/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    path: "/attraction/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
