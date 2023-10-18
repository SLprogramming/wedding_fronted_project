<template>
  <h4>Dress Details {{ props.id }}</h4>
  <div class="card">
    <div class="card-body shadow">
      <div class="row">
        <div class="col">
          <img
            :src="encodeURI(dressDetail.main_photo)"
            style="width: 500px; height: fit-content"
            alt=""
          />
          <div class="flex mt-2 gap-2 justify-content-start">
            <img
              v-for="(src, i) in dressDetail.related_photos"
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
                  <label for="" class="mb-1">Dress Name</label>
                  <input type="text" v-model="dressDetail.name" class="form-control" disabled />
                </div>
                <div class="col">
                  <label for="" class="mb-1">Dress Code</label>
                  <input type="text" v-model="dressDetail.code" class="form-control" disabled />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <label for="" class="mb-1">Category</label>
                  <input
                    type="text"
                    v-model="dressDetail.category_id"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col">
                  <label for="" class="mb-1">Dress Type</label>
                  <input type="text" v-model="dressDetail.type" class="form-control" disabled />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <label for="" class="mb-1">Borrow Price</label>
                  <input
                    type="text"
                    v-model="dressDetail.borrow_price"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col">
                  <label for="" class="mb-1">Selling Price</label>
                  <input
                    type="text"
                    v-model="dressDetail.selling_price"
                    class="form-control"
                    disabled
                  />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <label for="" class="mb-1">Current Qty</label>
                  <input
                    type="text"
                    v-model="dressDetail.current_qty"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col">
                  <label for="" class="mb-1">Description</label>
                  <input
                    type="text"
                    v-model="dressDetail.description"
                    class="form-control"
                    disabled
                  />
                </div>
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
import { useDressStore } from '../../stores/dress'

const dressStore = useDressStore()
const props = defineProps(['id'])

const dressDetail = ref({})
const isLoading = ref(false)

const getDressDetail = async () => {
  try {
    isLoading.value = true
    let res = await dressStore.fetchDress({ id: props.id })
    dressDetail.value = res.data
    console.log(dressDetail.value)
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
onMounted(async () => {
  await getDressDetail()
})
</script>
