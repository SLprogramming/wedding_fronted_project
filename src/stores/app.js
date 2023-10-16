import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useAppStore = defineStore('app', {
  state: () => ({
    sideNav: true
  }),
  actions: {
    showWarning(payload) {
      let message = 'Please Try Again!'
      if (payload) {
        message = payload.message
      }
      Swal.fire(message, '', 'warning')
    },
    showSuccess() {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 3000,
        title: 'Success'
      })
    },
    showError(payload) {
      let message = 'Please Try Again!'
      if (payload) {
        message = payload.message
      }
      Swal.fire(message, '', 'error')
    }
  }
})
