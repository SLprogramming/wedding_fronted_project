import { defineStore } from 'pinia'
import { getAxiosClient } from '@/data/axios'
export const useCategoryStore = defineStore('category', {
  actions: {
    fetchCategories() {
      return getAxiosClient()
        .get('category')
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    createCategory(payload) {
      return getAxiosClient()
        .post('category', payload)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    updateCategory(payload) {
      return getAxiosClient()
        .put('category/' + payload.id, payload)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    deleteCategory(id) {
      return getAxiosClient()
        .delete('category/' + id)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    }
  }
})
