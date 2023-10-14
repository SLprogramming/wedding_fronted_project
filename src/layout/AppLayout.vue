<template>
  <div class="d-flex gap-0 bg-primary" style="height: 100vh">
    <div class="side-nav" :class="{ 'nav-on': appStore.sideNav, 'nav-off': !appStore.sideNav }">
      <SideNav></SideNav>
    </div>
    <div class="main-panel">
      <button class="btn btn-success" @click="appStore.sideNav = !appStore.sideNav">side</button>
    </div>
  </div>
</template>
<script setup>
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
.side-nav {
  transition: all 0.5s ease;
  overflow: hidden;
  padding: 0;
  flex-shrink: 0;

  background-color: white;
}
</style>
