import { defineStore } from "pinia";
import api from "~/composables/useApi";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as any,
    token: null as string | null
  }),

  actions: {
    // -----------------------
    // LOGIN
    // -----------------------
    async login(credentials: { email: string; password: string }) {
      const { data } = await api.post("/login", credentials);

      this.user = data.user;
      this.token = data.token;

      // Save in Cookies (works SSR + Client)
      const tokenCookie = useCookie("token");
      const userCookie = useCookie("user");

      tokenCookie.value = data.token;
      userCookie.value = data.user;
    },

    // -----------------------
    // LOGOUT
    // -----------------------
    logout() {
      this.user = null;
      this.token = null;

      const tokenCookie = useCookie("token");
      const userCookie = useCookie("user");

      tokenCookie.value = null;
      userCookie.value = null;
    },

    // -----------------------
    // LOAD USER (SSR + Client)
    // -----------------------
    loadUserFromLocalStorage() {
      const tokenCookie = useCookie("token");
      const userCookie = useCookie("user");

      if (tokenCookie.value && userCookie.value) {
        this.token = tokenCookie.value;
        this.user = userCookie.value;
      }
    }
  }
});
