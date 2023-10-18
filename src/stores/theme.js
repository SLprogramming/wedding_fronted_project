import { defineStore } from 'pinia'
import { getAxiosClient } from '@/data/axios'
export const useThemeStore = defineStore('theme', {
  actions: {
    fetchThemes() {
      return getAxiosClient()
        .get('theme')
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    fetchTheme(payload) {
      return getAxiosClient(payload)
        .get('theme/' + payload.id)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    createTheme(payload) {
      return getAxiosClient()
        .post('theme', payload)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    deleteTheme(id) {
      return getAxiosClient()
        .delete('theme/' + id)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    },
    updateTheme(payload, id) {
      return getAxiosClient()
        .put('theme/' + id, payload)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw error
        })
    }
  }
})
