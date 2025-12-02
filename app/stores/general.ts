import { defineStore } from "pinia";
import api from "~/composables/useApi";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    home: [],
    successStories: [],
    faqs: [],
    about: [],
    isLoadingData: true
  }),

  actions: {
    async fetchHomeData() {
      try {
        this.isLoadingData = true;

        await Promise.all([
          this.fetchHome(),
          this.fetchSuccessStoriest(),
          this.fetchfaqs()
        ]);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        this.isLoadingData = false;
      }
    },

    async fetchAboutData() {
      try {
        this.isLoadingData = true;

        await Promise.all([this.fetchAbout(), this.fetchSuccessStoriest()]);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        this.isLoadingData = false;
      }
    },

    async fetchHome() {
      if (this.home.length) return;
      const { data } = await api.get("/Homepage");
      this.home = data?.data;
    },
    async fetchSuccessStoriest() {
      if (this.successStories.length) return;
      const { data } = await api.get("/success-stories");
      this.successStories = data?.data;
    },

    async fetchfaqs() {
      if (this.faqs.length) return;
      const { data } = await api.get("/faqs");
      this.faqs = data?.data;
    },

    async fetchAbout() {
      if (this.about.length) return;
      const { data } = await api.get("/about");
      this.about = data;
    }
  }
});
