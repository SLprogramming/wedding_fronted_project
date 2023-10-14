import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sideNav: true
  }),
  actions: {}
})
