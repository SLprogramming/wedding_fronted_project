<template>
  <h4>category list</h4>
  <div class="row">
    <div class="col-8">
      <template v-if="isLoading">
        <Loading></Loading>
      </template>
      <template v-else>
        <table class="table table-bordered table-striped table-hover hover-shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="categoryList.length > 0">
              <tr v-for="(item, i) in categoryList" :key="i">
                <td>{{ i + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.description || 'not set' }}</td>
                <td>
                  <i
                    class="bi bi-pencil-square text-warning fs-5 me-2"
                    @click="editCategory(item)"
                  ></i
                  ><i
                    class="bi bi-trash3-fill text-danger fs-5"
                    @click="deleteCategory(item.id, i)"
                  ></i>
                </td>
              </tr>
            </template>
            <tr v-else>
              <td class="text-center" colspan="5">No category exist</td>
            </tr>
          </tbody>
        </table>
      </template>
    </div>
    <div class="col-4">
      <div class="card bg-white hover-shadow">
        <div class="card-body">
          <h6>Create Category</h6>
          <label for="name">Name</label>
          <input type="text" v-model="userInput.name" name="" id="name" class="form-control mb-2" />
          <label for="type">Type</label>
          <select name="" id="type" v-model="userInput.type" class="form-select mb-2">
            <option value="dress">Dress</option>
            <option value="theme">Theme</option>
          </select>
          <label for="description">Description</label>
          <textarea
            v-model="userInput.description"
            name=""
            id="description"
            cols="30"
            class="form-control mb-2"
            rows="5"
          ></textarea>
          <template v-if="isUpdate">
            <button
              class="btn btn-danger text-white d-inline-block me-2"
              @click="
                () => {
                  isUpdate = false
                  resetData()
                }
              "
            >
              cancel
            </button>
            <button class="btn btn-info text-white d-inline-block me-2" @click="updateCategory()">
              update
            </button>
          </template>
          <template v-else>
            <button class="btn btn-info text-white d-inline-block" @click="createCategory()">
              Create
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useCategoryStore } from '../../stores/category'
import Loading from '@/tools/Loading.vue'
import { useAppStore } from '../../stores/app'
const categoryStore = useCategoryStore()
const appStore = useAppStore()

const isLoading = ref(false)
const isUpdate = ref(false)
const categoryList = ref([])
const userInput = ref({
  description: ''
})

const prepareForm = () => {
  let data = {}
  if (userInput.value.name && userInput.value.type) {
    data.name = userInput.value.name
    data.type = userInput.value.type
    data.description = userInput.value.description
  } else {
    return appStore.showError({ message: 'please fill the necessary filed!' })
  }
  if (isUpdate.value) {
    data.id = userInput.value.id
  }

  return data
}
const resetData = () => {
  userInput.value.name = ''
  userInput.value.type = ''
  userInput.value.description = ''
}
const createCategory = async () => {
  console.log(userInput.value)
  let formData = prepareForm()
  // return console.log(formData)
  try {
    let res = await categoryStore.createCategory(formData)
    console.log(res.data)
    categoryList.value.push(res.data)
    appStore.showSuccess()
  } catch (error) {
    console.log(error)
  } finally {
    resetData()
  }
}
const deleteCategory = async (id, i) => {
  try {
    let res = await categoryStore.deleteCategory(id)
    categoryList.value.splice(i, 1)
    console.log(res)
    appStore.showSuccess()
  } catch (error) {
    console.log(error)
  } finally {
  }
}
const editCategory = async (item) => {
  isUpdate.value = true
  console.log(item)
  userInput.value.name = item.name
  userInput.value.description = item.description
  userInput.value.type = item.type
  userInput.value.id = item.id
}
const updateCategory = async () => {
  let data = prepareForm()
  // return console.log(data)
  try {
    let res = await categoryStore.updateCategory(data)
    console.log(res)
    categoryList.value.map((e) => {
      if (e.id && e.id == data.id) {
        e.name = data.name
        e.description = data.description
        e.type = data.type
      }
    })
    appStore.showSuccess()
    resetData()
  } catch (error) {
    console.log(error)
  } finally {
    isUpdate.value = false
  }
}
const fetchCategory = async () => {
  try {
    isLoading.value = true
    let res = await categoryStore.fetchCategories()
    categoryList.value = res.data
    console.log(categoryList.value)
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  fetchCategory()
})
</script>
