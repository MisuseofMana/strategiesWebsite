import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'
import VueRouter from 'vue-router'

require('./assets/styles/mysass.scss');

Vue.use(Buefy)
Vue.use(VueRouter)

import Strategies from './components/TheStrategies.vue'
import Rehab from './components/RehabStrategies.vue'
import Staff from './components/StaffingStrategies.vue'
import Care from './components/CareStrategies.vue'
import Its from './components/TreatmentStrategies.vue'
import Team from './components/StrategiesTeam.vue'
import RehabForm from './components/RehabForm.vue'
import CareForm from './components/CareForm.vue'

const Strat = Strategies;
const Staffing = Staff;
const RehabStrat = Rehab;
const CareStrat = Care;
const Treatment = Its;
const OurTeam = Team;
const FormForRehab = RehabForm;
const FormForCare = CareForm

const routes = [
  {path: '/', component: Strat},
  {path: '/RehabStrategies', component: RehabStrat},
  {path: '/StaffingStrategies', component: Staffing},
  {path: '/CareStrategies', component: CareStrat},
  {path: '/InnovativeTreatmentStrategies', component: Treatment},
  {path: '/OurTeam', component: OurTeam},
  {path: '/RehabForm', component: FormForRehab},
  {path: '/CareForm', component: FormForCare},

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
  scrollBehavior () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
