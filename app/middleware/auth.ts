import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware(() => {
  if (process.server) return

  const userStore = useUserStore()

  if (!userStore.token) {
    return navigateTo('/login')
  }
})
