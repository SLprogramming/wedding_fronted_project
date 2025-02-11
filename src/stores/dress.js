import { defineStore } from 'pinia'
import { getAxiosClient } from '@/data/axios'
export const useDressStore = defineStore('dress', {
  actions: {
    fetchDresses() {
      return getAxiosClient()
        .get('dress')
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    fetchDress(payload) {
      return getAxiosClient()
        .get('dress/' + payload.id)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    createDress(payload) {
      return getAxiosClient()
        .post('dress', payload)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    deleteDress(id) {
      return getAxiosClient()
        .delete('dress/' + id)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    updateDress(payload, id) {
      return getAxiosClient()
        .put('dress/' + id, payload)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    }
  }
})
