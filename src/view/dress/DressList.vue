<template>
  <h4>dress List</h4>

  <div class="d-flex mb-3 justify-content-end">
    <div>
      <button
        class="btn btn-info text-white"
        data-bs-toggle="modal"
        data-bs-target="#dressCreateModal"
      >
        add dress
      </button>
    </div>
    <div
      class="modal fade"
      id="dressCreateModal"
      tabindex="-1"
      aria-labelledby="dress_create_label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">Create Dress</div>
          <div class="modal-body">
            <label for="dress_name">Name</label>
            <input type="text" name="" id="dress_name" class="form-control" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <template v-if="isLoading">
    <Loading></Loading>
  </template>
  <template v-else>
    <table class="table table-borderless table-hover table-striped hover-shadow">
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Code</th>
          <th>Name</th>
          <th>Type</th>
          <th>Category</th>
          <th>Borrow Price(MMK)</th>
          <th>Selling Price(MMK)</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="dressList.length > 0">
          <tr v-for="(dress, i) in dressList" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ dress.name }}</td>
            <td>
              <img :src="dress.main_photo" style="width: 100px; height: fit-content" alt="" />
            </td>
            <td>{{ dress.name }}</td>
            <td>{{ dress.type }}</td>
            <td>{{ dress.category_id }}</td>
            <td>{{ dress.borrow_price }}</td>
            <td>{{ dress.selling_price }}</td>
            <td>
              <i class="bi bi-pencil-square text-warning fs-4 me-2"></i>
              <i class="bi bi-trash3-fill fs-4 text-danger"></i>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="9" class="text-center">No Item Exist!</td>
        </tr>
      </tbody>
    </table>
  </template>
</template>
<script setup>
import { useDressStore } from '@/stores/dress.js'
import { onMounted, ref } from 'vue'
import Loading from '@/tools/Loading.vue'
const dressStore = useDressStore()

const isLoading = ref(false)

const dressList = ref([])

const getDresses = async () => {
  try {
    isLoading.value = true
    let res = await dressStore.fetchDresses()
    dressList.value = res.data
    console.log(dressList.value)
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
onMounted(async () => {
  getDresses()
})
</script>
