import Vue from "vue";
import App from "./App.vue";

import "./assets/styles/index.css";
import "./assets/tailwind.css";
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/pro-solid-svg-icons'
import {far} from '@fortawesome/pro-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fal} from '@fortawesome/pro-light-svg-icons'
import {fad} from '@fortawesome/pro-duotone-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(fas, far, fab, fal, fad)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
