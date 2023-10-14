<template>
  <h1>dress List</h1>
</template>
<script setup>
import { useDressStore } from '@/stores/dress.js'
import { onMounted } from 'vue'
const dressStore = useDressStore()

onMounted(async () => {
  try {
    let res = await dressStore.fetchDress()
    console.log(res.data[0].related_photo)
    let arr = res.data[0].related_photo
    let jsonArr = JSON.parse(arr)
    console.log(jsonArr)
  } catch (error) {
    console.log(error)
  }
})
</script>
