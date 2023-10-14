import { defineStore } from 'pinia'
import { getAxiosClient } from '@/data/axios'
export const useDressStore = defineStore('dress', {
  state: () => ({
    sideNav: true
  }),
  actions: {
    fetchDress() {
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
