<template>
  <h4>Theme List</h4>

  <div class="d-flex mb-3 justify-content-end">
    <div>
      <button
        class="btn btn-info text-white"
        data-bs-toggle="modal"
        data-bs-target="#themeCreateModal"
        @click="
          () => {
            isEdit = false
            resetForm()
          }
        "
      >
        Create Theme
      </button>
      <button
        class="d-none"
        data-bs-toggle="modal"
        ref="createThemeBtn"
        data-bs-target="#themeCreateModal"
      ></button>
    </div>

    <!-- Theme create modal -->
    <div
      class="modal fade"
      id="themeCreateModal"
      tabindex="-1"
      aria-labelledby="theme_create_label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-between">
            <div class="">Create Theme</div>
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
            <form @submit.prevent="createTheme" ref="themeCreateForm" enctype="multipart/form-data">
              <div class="row mb-2">
                <div class="col">
                  <label for="theme_name">Theme Name</label>
                  <input
                    type="text"
                    name="name"
                    v-model="selectedEditTheme.name"
                    id="theme_name"
                    class="form-control"
                  />
                </div>
                <div class="col">
                  <label for="theme_code">Theme Code</label>
                  <input
                    type="text"
                    name="code"
                    id="theme_code"
                    v-model="selectedEditTheme.code"
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
                    v-model="selectedEditTheme.category_id"
                    class="form-control"
                  >
                    <option v-for="(item, i) in categoryList" :key="i" :value="+item.id">
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div class="col">
                  <label for="theme_type">Theme Type</label>
                  <select
                    name="type"
                    id="theme_type"
                    v-model="selectedEditTheme.type"
                    class="form-control"
                  >
                    <!-- 'Traditional','Western','Thai','Vietnam','Chinese' -->
                    <option value="InDoor">InDoor</option>
                    <option value="OutDoor">OutDoor</option>
                  </select>
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
                  <label for="description">Description</label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    v-model="selectedEditTheme.description"
                    class="form-control"
                  />
                </div>
              </div>
              <input type="number" name="id" v-model="selectedEditTheme.id" hidden id="" />
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
    <!-- theme create modal -->
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="themeList.length > 0">
          <tr v-for="(theme, i) in themeList" :key="i" @click="getDetail(theme.id)">
            <td>{{ i + 1 }}</td>
            <td>
              <img
                :src="encodeURI(theme.main_photo)"
                style="width: 100px; height: fit-content"
                alt=""
              />
            </td>
            <td>{{ theme.code }}</td>
            <td>{{ theme.name }}</td>
            <td>{{ theme.type }}</td>
            <td>{{ theme.category_id }}</td>

            <td>
              <i
                class="bi bi-pencil-square text-warning fs-4 me-4"
                @click.stop="editTheme(theme)"
              ></i>
              <i
                class="bi bi-trash3-fill fs-4 text-danger cursor-pointer"
                @click.stop="deleteTheme(theme.id, i)"
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
import { useThemeStore } from '@/stores/theme.js'
import { useCategoryStore } from '@/stores/category.js'
import { onMounted, ref } from 'vue'
import Loading from '@/tools/Loading.vue'
import SubmitButton from '@/tools/SubmitButton.vue'
import { useAppStore } from '../../stores/app'
import { useRouter } from 'vue-router'
const themeStore = useThemeStore()
const categoryStore = useCategoryStore()
const router = useRouter()
const appStore = useAppStore()
const isLoading = ref(false)
const themeCreateForm = ref(null)
const submitting = ref(false)
const themeList = ref([])
const categoryList = ref([])
const createCloseBtn = ref(null)
const createThemeBtn = ref(null)

const selectedEditTheme = ref({})
const isEdit = ref(false)
const main_photo = ref(null)
const related_photo = ref(null)

const resetForm = () => {
  console.log('reset')
  console.log(main_photo.value)
  main_photo.value.value = null
  related_photo.value.value = null

  selectedEditTheme.value.name = ''
  selectedEditTheme.value.code = ''
  selectedEditTheme.value.category_id = ''
  selectedEditTheme.value.type = ''
  selectedEditTheme.value.selling_price = ''
  selectedEditTheme.value.borrow_price = ''
  selectedEditTheme.value.current_qty = ''
  selectedEditTheme.value.description = ''
  selectedEditTheme.value.id = ''
  console.log(themeList.value)
}
const createTheme = async () => {
  let formData = prepareForm()
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`)
  }
  let num = formData.get('id')
  console.log(+num)
  // return
  try {
    submitting.value = true
    let res
    if (isEdit.value) {
      res = await themeStore.updateTheme(formData, +num)
    } else {
      res = await themeStore.createTheme(formData)
    }
    appStore.showSuccess()
    console.log(res)
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
    getThemes()
    createCloseBtn.value.click()
  }
}
const editTheme = async (theme) => {
  isEdit.value = true
  let obj = { ...theme }

  selectedEditTheme.value = obj
  createThemeBtn.value.click()
}
const prepareForm = () => {
  let formData = new FormData(themeCreateForm.value)

  return formData
}
const deleteTheme = async (id, i) => {
  try {
    let res = await themeStore.deleteTheme(id)
    appStore.showSuccess()

    console.log(res)
  } catch (error) {
    console.log(error)
  } finally {
    themeList.value.splice(i, 1)
  }
}
const getThemes = async () => {
  try {
    let res = await themeStore.fetchThemes()
    themeList.value = res.data
    // let str = themeList.value[6].main_photo
    // let strRes = encodeURI(str)
    // console.log(strRes)
    themeList.value[0].related_photos.map((e) => {
      console.log(encodeURI(e))
    })
    console.log(encodeURI(themeList.value[0].main_photo))
  } catch (error) {
    console.log(error)
  }
}
const getCategories = async () => {
  try {
    let res = await categoryStore.fetchCategories()
    console.log(res)
    categoryList.value = res.data.filter((e) => e.type == 'theme')
  } catch (error) {
    console.log(error)
  }
}
const prepareView = async () => {
  try {
    isLoading.value = true
    await getThemes()
    await getCategories()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
const getDetail = (id) => {
  router.push({ name: 'theme.detail', params: { id } })
}
onMounted(async () => {
  await prepareView()
})
</script>
