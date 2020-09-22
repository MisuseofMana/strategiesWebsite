<template>
  <div id="app">
    <!-- Site Container -->
    <el-container class="navMenu">

      <side-bar/>

      <!--Right Hand Aside -->
      <el-aside width="300px">
            <h2>Explore</h2>
            <el-divider></el-divider>
            <el-menu 
            :default-active="activeIndex" 
            mode="vertical" 
            @select="handleSelect"
            background-color="#497093"
            text-color="white"
            active-text-color="#ffaa22"
            >
              <el-menu-item index="1">
                <i class="el-icon-first-aid-kit"></i>
                Rehab Strategies
              </el-menu-item>
              
              <el-menu-item index="2">
                <i class="el-icon-s-custom"></i>
                Staffing Strategies
              </el-menu-item>

              <el-menu-item index="3">
                <i class="el-icon-star-off"></i>
                Innovative Treatment Strategies
              </el-menu-item>

              <el-menu-item index="4">
                <i class="el-icon-box"></i>
                Innovative Treatment Supplies
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-guide"></i>
                Innovative Care Strategies
              </el-menu-item>
              <el-menu-item index="6">
                <i class="el-icon-user"></i>
                The Strategies Team
              </el-menu-item>
            </el-menu>
          </el-aside>

    <el-container class="siteWrap">
        <!-- Header -->
        <el-header height="150px">
          <!-- Logo -->
          <el-image
            style="height:90px;"
            :src="url"
            fit="scale-down">
          </el-image>
        </el-header>

        <!-- Main Content -->
        <transition name="fade" mode="out-in">
          <rehab-strategies key="rehab" v-if="activeIndex == '1'"/>  
          <staffing-strategies key="staffing" v-else-if="activeIndex == '2'"/>
          <treatment-strategies key="treatment" v-else-if="activeIndex == '3'"/>
          <treatment-supplies key="supplies" v-else-if="activeIndex == '4'"/>
          <care-strategies key="care" v-else-if="activeIndex == '5'"/>
          <strategies-team key="team" v-else-if="activeIndex == '6'"/>
        </transition>
    </el-container>

      
    </el-container>

  </div>
</template>

<script>
import '@/assets/styles/global.css'

import SideBar from '@/components/SideBar'
import RehabStrategies from '@/components/RehabStrategies'
import StaffingStrategies from '@/components/StaffingStrategies'
import TreatmentStrategies from '@/components/TreatmentStrategies'
import TreatmentSupplies from '@/components/TreatmentSupplies'
import CareStrategies from '@/components/CareStrategies'
import StrategiesTeam from '@/components/StrategiesTeam'

export default {
  name: 'app',
  components: {
    SideBar,
    RehabStrategies,
    StaffingStrategies,
    TreatmentStrategies,
    TreatmentSupplies,
    CareStrategies,
    StrategiesTeam
  },
  data() {
    return {
      activeIndex: '1',
      url: require('@/assets/imgs/logo.png'),
      whoUrl: require('@/assets/imgs/city.jpg')
    }
  },
   methods: {
      handleSelect(key) {
        this.activeIndex = key;
      }
    }
}
</script>

<style>
 

</style>
