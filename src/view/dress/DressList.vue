<template>
  <h4>dress List</h4>

  <div class="d-flex mb-3 justify-content-end">
    <div>
      <button
        class="btn btn-info text-white"
        data-bs-toggle="modal"
        data-bs-target="#dressCreateModal"
        @click="
          () => {
            isEdit = false
            resetForm()
          }
        "
      >
        Create Dress
      </button>
      <button
        class="d-none"
        data-bs-toggle="modal"
        ref="createDressBtn"
        data-bs-target="#dressCreateModal"
      ></button>
    </div>

    <!-- dress create modal -->
    <div
      class="modal fade"
      id="dressCreateModal"
      tabindex="-1"
      aria-labelledby="dress_create_label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-between">
            <div class="">Create Dress</div>
            <div class="">
              <button
                type="button"
                ref="createCloseBtn"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>

          <div class="modal-body">
            <form @submit.prevent="createDress" ref="dressCreateForm" enctype="multipart/form-data">
              <div class="row mb-2">
                <div class="col">
                  <label for="dress_name">Dress Name</label>
                  <input
                    type="text"
                    name="name"
                    v-model="selectedEditDress.name"
                    id="dress_name"
                    class="form-control"
                  />
                </div>
                <div class="col">
                  <label for="dress_code">Dress Code</label>
                  <input
                    type="text"
                    name="code"
                    id="dress_code"
                    v-model="selectedEditDress.code"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <label for="category">Category</label>
                  <select
                    name="category_id"
                    id="category"
                    v-model="selectedEditDress.category_id"
                    class="form-control"
                  >
                    <option v-for="(item, i) in categoryList" :key="i" :value="+item.id">
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div class="col">
                  <label for="dress_type">Dress Type</label>
                  <select
                    name="type"
                    id="dress_type"
                    v-model="selectedEditDress.type"
                    class="form-control"
                  >
                    <!-- 'Traditional','Western','Thai','Vietnam','Chinese' -->
                    <option value="Traditional">Traditional</option>
                    <option value="Western">Western</option>
                    <option value="Thai">Thai</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Chinese">Chinese</option>
                  </select>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <label for="borrow_price">Borrow Price</label>
                  <input
                    type="number"
                    name="borrow_price"
                    v-model="selectedEditDress.borrow_price"
                    id="borrow_price"
                    class="form-control"
                  />
                </div>
                <div class="col">
                  <label for="selling_price">Selling Price</label>
                  <input
                    type="number"
                    v-model="selectedEditDress.selling_price"
                    name="selling_price"
                    id="selling_price"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <label for="main_photo">Main Photo</label>
                  <input
                    type="file"
                    name="main_photo"
                    id="main_photo"
                    ref="main_photo"
                    class="form-control"
                  />
                </div>
                <div class="col">
                  <label for="related_photo">Related Photo</label>
                  <input
                    type="file"
                    ref="related_photo"
                    name="related_photo[]"
                    id="related_photo"
                    class="form-control"
                    multiple
                  />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <label for="current_qty">Current Qty</label>
                  <input
                    type="number"
                    name="current_qty"
                    v-model="selectedEditDress.current_qty"
                    id="current_qty"
                    class="form-control"
                  />
                </div>
                <div class="col">
                  <label for="description">Description</label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    v-model="selectedEditDress.description"
                    class="form-control"
                  />
                </div>
              </div>
              <input type="number" name="id" v-model="selectedEditDress.id" hidden id="" />
              <template v-if="isEdit">
                <div class="">
                  <SubmitButton name="update" :loading="submitting" />
                </div>
              </template>
              <div v-else class="">
                <SubmitButton name="Register" :loading="submitting" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- dress create modal -->
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
          <tr v-for="(dress, i) in dressList" :key="i" @click="getDetail(dress.id)">
            <td>{{ i + 1 }}</td>
            <td>
              <img
                :src="encodeURI(dress.main_photo)"
                style="width: 100px; height: fit-content"
                alt=""
              />
            </td>
            <td>{{ dress.code }}</td>
            <td>{{ dress.name }}</td>
            <td>{{ dress.type }}</td>
            <td>{{ dress.category_id }}</td>
            <td>{{ dress.borrow_price }}</td>
            <td>{{ dress.selling_price }}</td>
            <td>
              <i
                class="bi bi-pencil-square text-warning fs-4 me-4"
                @click.stop="editDress(dress)"
              ></i>
              <i
                class="bi bi-trash3-fill fs-4 text-danger cursor-pointer"
                @click.stop="deleteDress(dress.id, i)"
              ></i>
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
import { useCategoryStore } from '@/stores/category.js'
import { onMounted, ref } from 'vue'
import Loading from '@/tools/Loading.vue'
import SubmitButton from '@/tools/SubmitButton.vue'
import { useAppStore } from '../../stores/app'
import { useRouter, useRoute } from 'vue-router'
const dressStore = useDressStore()
const categoryStore = useCategoryStore()
const appStore = useAppStore()
const router = useRouter()
const route = useRoute()

const isLoading = ref(false)
const dressCreateForm = ref(null)
const submitting = ref(false)
const dressList = ref([])
const categoryList = ref([])
const createCloseBtn = ref(null)
const createDressBtn = ref(null)

const selectedEditDress = ref({})
const isEdit = ref(false)
const main_photo = ref(null)
const related_photo = ref(null)

const resetForm = () => {
  main_photo.value.value = null
  related_photo.value.value = null

  selectedEditDress.value.name = ''
  selectedEditDress.value.code = ''
  selectedEditDress.value.category_id = ''
  selectedEditDress.value.type = ''
  selectedEditDress.value.selling_price = ''
  selectedEditDress.value.borrow_price = ''
  selectedEditDress.value.current_qty = ''
  selectedEditDress.value.description = ''
  selectedEditDress.value.id = ''
}
const prepareForm = () => {
  let formData = new FormData(dressCreateForm.value)

  return formData
}

const createDress = async () => {
  // create and update are in one function
  let formData = prepareForm()
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`)
  }
  let num = formData.get('id')

  // return
  try {
    submitting.value = true
    let res
    if (isEdit.value) {
      res = await dressStore.updateDress(formData, +num)
    } else {
      res = await dressStore.createDress(formData)
    }
    appStore.showSuccess()
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
    getDresses()
    createCloseBtn.value.click()
  }
}

const editDress = async (dress) => {
  // only for show old data in edit modal
  isEdit.value = true
  let obj = { ...dress }

  selectedEditDress.value = obj
  createDressBtn.value.click()
}
const deleteDress = async (id, i) => {
  try {
    let res = await dressStore.deleteDress(id)
    appStore.showSuccess()
  } catch (error) {
    console.log(error)
  } finally {
    dressList.value.splice(i, 1)
  }
}

const getDetail = (id) => {
  // go to detail page for single dress
  console.log(id)
  router.push({ name: 'dress.detail', params: { id } })
}

const getDresses = async () => {
  try {
    let res = await dressStore.fetchDresses()
    dressList.value = res.data
    console.log('dress response', dressList.value)
  } catch (error) {
    console.log(error)
  }
}
const getCategories = async () => {
  try {
    let res = await categoryStore.fetchCategories()

    categoryList.value = res.data.filter((e) => e.type == 'dress')
    console.log('related categoryList', categoryList.value)
  } catch (error) {
    console.log(error)
  }
}

const prepareView = async () => {
  // fetch all necessary data for page
  try {
    isLoading.value = true
    await getDresses()
    await getCategories()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
onMounted(async () => {
  await prepareView()
})
</script>
