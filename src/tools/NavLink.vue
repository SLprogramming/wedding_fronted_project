<template>
  <router-link
    :to="{ name: payload.url }"
    class="text-white d-inline-flex text-decoration-none px-2 py-1 rounded cus-nav-link"
    >{{ payload.name }}</router-link
  >
</template>

<script setup>
defineProps(['payload'])
</script>

<style lang="scss" scoped>
.cus-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.331) !important;
}
.cus-nav-link {
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.331);
  transition: all 0.5s ease;
  color: black !important;
}
</style>
