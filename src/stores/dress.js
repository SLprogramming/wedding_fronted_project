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
    }
  }
})
