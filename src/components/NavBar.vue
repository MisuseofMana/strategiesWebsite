<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://thestrategies.com">
      <img src="../assets/imgs/logos/theStrat.png">
    </a>

    <a role="button" @click="toggleNav()" class="navbar-burger burger" :class="{'is-active': navBarToggle}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <br>

  <div id="navbarBasicExample" :class="{'is-active': navBarToggle}" class="navbar-menu">
    <div class="navbar-start">
        <router-link class="navbar-item" to="/" exact><span class="icon"><i class="mdi mdi-newspaper-variant-outline"></i></span> The Strategies</router-link>
        <router-link class="navbar-item" to="/RehabStrategies"><span class="icon"><i class="mdi mdi-handshake-outline"></i></span> Rehab Strategies</router-link>
        <router-link class="navbar-item" to="/StaffingStrategies"><span class="icon"><i class="mdi mdi-account-group"></i></span> Staffing Strategies</router-link>
        <router-link class="navbar-item" to="/CareStrategies"><span class="icon"><i class="mdi mdi-bottle-tonic-plus-outline"></i></span> Care Strategies</router-link>
        <router-link class="navbar-item" to="/InnovativeTreatmentStrategies"><span class="icon"><i class="mdi mdi-desktop-classic"></i></span> Innovative Treatment Strategies</router-link>
        <router-link class="navbar-item" to="/OurTeam"><span class="icon"><i class="mdi mdi-briefcase-outline"></i></span> Our Team</router-link>
    </div>
  </div>
    <br><br>
</nav>
</template>

<script>
    export default {
        name: 'NavBar',
        data() {
          return {
            navBarToggle: false,
          }
        },
        methods: {
          toggleNav() {
            this.navBarToggle = !this.navBarToggle;
          }
        }
    }
</script>

<style scoped>

</style>