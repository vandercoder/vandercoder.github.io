import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faPython, faGoodreads, faJsSquare, faVuejs, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faFileCode, faStickyNote, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome, faChevronDown, faChevronUp, faFileCode, faStickyNote, faQuestionCircle,
  faPython, faGoodreads, faJsSquare, faVuejs, faCss3Alt
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
