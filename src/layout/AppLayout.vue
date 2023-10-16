<template>
  <div class="d-flex" style="height: 100vh">
    <div
      class="sidebar bg-info overflow-y-scroll"
      :class="{ 'nav-on': appStore.sideNav, 'nav-off': !appStore.sideNav }"
    >
      <SideNav></SideNav>
    </div>
    <div class="main-panel w-100 px-2">
      <div class="w-100">
        <TopNav></TopNav>
      </div>
      <div class="" style="min-height: 500px">
        <router-view></router-view>
      </div>
      <div class="text-center" style="margin-top: 50px">
        <small>Copyright @ kwin 2023</small>
      </div>
    </div>
  </div>
</template>
<script setup>
import TopNav from './TopNav.vue'
import SideNav from '@/layout/SideNav.vue'
import { useAppStore } from '../stores/app'
const appStore = useAppStore()
</script>
<style scoped>
.nav-on {
  width: 15%;
}
.nav-off {
  width: 0%;
}
.sidebar {
  transition: all 0.5s ease;
  overflow: hidden;
  padding: 0;
  flex-shrink: 0;

  background-color: white;
}
</style>
