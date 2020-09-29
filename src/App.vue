<template>
  <div id="app">
    <div class="columns is-variable is-8">
      <div class="column navigation fixedcolumn is-3-desktop is-hidden-touch">
        <div class="section">
        
          <div class="container is-horizotal-center">
              <img src="./assets/imgs/logos/theStrat.png"/>
          </div>
          <br>
          <div class="block">
            <aside class="menu">
              <ul class="menu-list">
                <li><router-link to="/" exact><span class="icon"><i class="mdi mdi-newspaper-variant-outline"></i></span>The Strategies</router-link></li>
                <li><router-link to="/RehabStrategies"><span class="icon"><i class="mdi mdi-handshake-outline"></i></span>Rehab Strategies</router-link>
                  <ul>
                    <li><li><router-link to="/RehabForm"><span class="icon"><i class="mdi mdi-handshake-outline"></i></span>Work for Rehab Strategies</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/StaffingStrategies"><span class="icon"><i class="mdi mdi-account-group"></i></span>Staffing Strategies</router-link></li>
                <li><router-link to="/CareStrategies"><span class="icon"><i class="mdi mdi-bottle-tonic-plus-outline"></i></span>Care Strategies</router-link>
                  <ul>
                    <li><li><router-link to="/CareForm"><span class="icon"><i class="mdi mdi-file-account"></i></span>Work for Care Strategies</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/InnovativeTreatmentStrategies"><span class="icon"><i class="mdi mdi-desktop-classic"></i></span>Innovative Treatment Strategies</router-link></li>
                <li><router-link to="/OurTeam"><span class="icon"><i class="mdi mdi-briefcase-outline"></i></span>Our Team</router-link></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>

      <div class="column is-9-desktop is-offset-3-desktop">
        <div class="section">
          <nav-bar class="is-hidden-desktop"/>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/global.css'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar,
  },
  methods: { 
    scrollToTop() {
        window.scrollTo(0,0);
    }
  }
}
</script>

<style>
.posRelative {
  position:relative;
  text-align:center;
}

.border-left {
  margin-left:20px;
}

.fixedcolumn {
  position:fixed;
  top:0px;
  left:0px;
  height:100vh;
}

.logoConstraint {
  max-height:170px;
  margin:0 0 30px 0;
}

.toTop {
  background:#008080;
  border-radius:99999px;
  width:50px;
  height:50px;
}

.navigation {
  background:#eee;
}
</style>
