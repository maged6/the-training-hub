import { defineNuxtRouteMiddleware, navigateTo } from "#app";
import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore();

  // Load from localStorage if needed
  if (!userStore.user) {
    userStore.loadUserFromLocalStorage();
  }

  // If not logged in → redirect to login
  if (!userStore.token) {
    return navigateTo("/my-account/login");
  }
});
