import { defineStore } from "pinia";
import api from "~/composables/useApi";

// https://tailwindflex.com/@Shariar-Hasan/simple-otp-box-form

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as null | Record<string, any>,
    token: null as string | null
  }),

  actions: {
    async login(credentials: { email: string; password: string }) {
      const { data } = await api.post("/login", credentials);
      this.user = data.user;
      this.token = data.token;

      localStorage.setItem("user", JSON.stringify(data));
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
    },

    loadUserFromLocalStorage() {
      const saved = localStorage.getItem("user");
      if (saved) {
        const parsed = JSON.parse(saved);
        this.user = parsed.user;
        this.token = parsed.token;
      }
    }
  }
});
