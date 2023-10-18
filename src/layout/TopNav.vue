<template>
  <div
    class="d-flex align-items-center justify-content-between border-1 rounded shadow-sm bg-info px-2 py-1 my-2"
  >
    <div class="d-flex align-items-center gap-3">
      <button class="btn btn-outline-info bg-white" @click="appStore.sideNav = !appStore.sideNav">
        <i class="bi bi-upc"></i>
      </button>
      <button class="btn btn-outline-info bg-white" @click="router.back()">
        <i class="bi bi-chevron-left"></i>
      </button>
      <div class="text-capitalize fw-semibold">Wedding Studio</div>
    </div>
    <div class="dropdown">
      <button
        class="btn dropdown-toggle bg-light"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="@/assets/img/user.png"
          class="shadow-sm me-3"
          style="width: 30px; height: 30px; border-radius: 50%; object-fit: cover"
          alt=""
        />
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item text-danger">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'

const router = useRouter()
const appStore = useAppStore()
</script>
