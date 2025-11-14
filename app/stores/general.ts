import { defineStore } from 'pinia'
import api from '~/composables/useApi'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    home:[],
    successStories: [],
    about: null,
    services: [],
    faqs: [],
    media: [],
    loading: false,
  }),

  actions: {

    async fetchHomeData() {
  try {
    this.loading = true

    await Promise.all([
      this.fetchHome(),
      this.fetchSuccessStoriest()
    ])
  } catch (error) {
    console.error("Error fetching homepage data:", error)
  } finally {
    this.loading = false
  }
},

    async fetchHome() {
        const { data } = await api.get('/Homepage')
        this.home = data?.data
    },
     async fetchSuccessStoriest() {
      const { data } = await api.get('/success-stories')
      this.successStories = data?.data
    },
    async fetchAbout() {
      const { data } = await api.get('/about')
      this.about = data
    },
    async fetchServices() {
      const { data } = await api.get('/services')
      this.services = data
    },

    async fetchFaqs() {
      const { data } = await api.get('/faqs')
      this.faqs = data
    },

    async fetchMedia() {
      const { data } = await api.get('/media-center')
      this.media = data
    },
  },
})
