<template>
  <h4>Theme Details {{ props.id }}</h4>
  <div class="card">
    <div class="card-body shadow">
      <div class="row">
        <div class="col">
          <img
            :src="encodeURI(themeDetail.main_photo)"
            style="width: 500px; height: fit-content"
            alt=""
          />
          <div class="flex mt-2 gap-2 justify-content-start">
            <img
              v-for="(src, i) in themeDetail.related_photos"
              :key="i"
              :src="encodeURI(src)"
              style="width: 100px; height: fit-content"
              alt=""
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body hover-shadow">
              <div class="row mb-2">
                <div class="col">
                  <label for="" class="mb-1">Theme Name</label>
                  <input type="text" v-model="themeDetail.name" class="form-control" disabled />
                </div>
                <div class="col">
                  <label for="" class="mb-1">Theme Code</label>
                  <input type="text" v-model="themeDetail.code" class="form-control" disabled />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <label for="" class="mb-1">Category</label>
                  <input
                    type="text"
                    v-model="themeDetail.category_id"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col">
                  <label for="" class="mb-1">Theme Type</label>
                  <input type="text" v-model="themeDetail.type" class="form-control" disabled />
                </div>
              </div>

              <div class="row mb-2">
                <div class="col">
                  <label for="" class="mb-1">Description</label>
                  <input
                    type="text"
                    v-model="themeDetail.description"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useThemeStore } from '../../stores/theme'

const themeStore = useThemeStore()
const props = defineProps(['id'])

const themeDetail = ref({})
const isLoading = ref(false)

const getThemeDetail = async () => {
  try {
    isLoading.value = true
    let res = await themeStore.fetchTheme({ id: props.id })
    themeDetail.value = res.data
    console.log(themeDetail.value)
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
onMounted(async () => {
  await getThemeDetail()
})
</script>
