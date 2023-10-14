<template>
  <div class="w-100 h-100">
    <h3 class="text-white text-center">Wedding</h3>
    <ul class="list-unstyled px-1">
      <li>
        <div>
          <button
            class="btn btn-primary w-100 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#inventory-collapse"
            aria-expanded="true"
          >
            <i class="bi bi-cart-fill me-2"></i> INVENTORY
          </button>
          <div class="collapse show mb-2" id="inventory-collapse">
            <ul class="btn-toggle-nav d-flex flex-column list-unstyled fw-normal small">
              <li class="ps-2 text-white bg-primary w-100 rounded-2">
                <NavLink :payload="{ url: 'category.list', name: 'Category List' }"></NavLink>
              </li>
              <li class="ps-2 text-white bg-primary w-100 rounded-2">
                <NavLink :payload="{ url: 'dress.list', name: 'Dress List' }"></NavLink>
              </li>
              <!-- <li class="float-right mb-1 ps-3 text-white bg-primary w-100 rounded-2 py-2 myList">
                Theme List
              </li>
              <li class="float-right mb-1 ps-3 text-white bg-primary w-100 rounded-2 py-2 myList">
                Package List
              </li> -->
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div>
          <button
            class="btn btn-primary w-100 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#appointment-collapse"
            aria-expanded="true"
          >
            <i class="bi bi-calendar-check me-2"></i> APPOINTMENT
          </button>
          <div class="collapse show mb-2" id="appointment-collapse">
            <ul class="btn-toggle-nav d-flex flex-column list-unstyled fw-normal pt-1 small ps-3">
              <li class="float-right mb-1 ps-3 text-white bg-primary w-100 rounded-2 py-2 myList">
                Appointment List
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div>
          <button
            class="btn btn-primary w-100 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collection-collapse"
            aria-expanded="true"
          >
            <i class="bi bi-collection me-2"></i> COLLECTION
          </button>
          <div class="collapse show mb-2" id="collection-collapse">
            <ul class="btn-toggle-nav d-flex flex-column list-unstyled fw-normal pt-1 small ps-3">
              <li class="float-right mb-1 ps-3 text-white bg-primary w-100 rounded-2 py-2 myList">
                Collection List
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import NavLink from '../tools/NavLink.vue'
</script>

<style lang="scss" scoped>
.btn-toggle {
  color: white;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  position: relative;
  margin-bottom: 5px;
}

.btn-toggle:hover,
.btn-toggle:focus {
  color: white;
  background-color: rgba(255, 255, 255, 0.5);
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  margin-right: 5px;
  right: 0;
  position: absolute;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}

.btn-toggle[aria-expanded='true'] {
  color: white;
}

.btn-toggle[aria-expanded='true']::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  padding: 0.1875rem 0.5rem;
  margin-bottom: 0.25rem;
  margin-top: 0.125rem;
  margin-left: 0.75rem;
  border: 1px solid #5fb19a !important;
  box-shadow: 0.2rem 0.2rem 0.6rem #0f534f7e !important;
  font-size: 14px;
}
.btn-primary {
  box-shadow: 0.2rem 0.2rem 0.6rem #0f534f7e !important;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: rgba(255, 255, 255, 0.342);
}

li a {
  width: calc(100% - 0.75rem);
}

.nav-on {
  width: 220px;
  opacity: 100;
}

.nav-off {
  width: 220px;
  opacity: 0;
}
</style>
