import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style/main.scss";
import VueSmoothScroll from 'vue2-smooth-scroll'
import VShowSlide from 'v-show-slide'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSortDown, faSortUp, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSortDown, faSortUp, faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueSmoothScroll)
Vue.use(VShowSlide)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
