<template>
  <h5>dress List</h5>
</template>
<script setup>
import { useDressStore } from '@/stores/dress.js'
import { onMounted } from 'vue'
const dressStore = useDressStore()

onMounted(async () => {
  try {
    let res = await dressStore.fetchDress()

    console.log(res.data[0].main_photo)
  } catch (error) {
    console.log(error)
  }
})
</script>
