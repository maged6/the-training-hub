<template>
  <div class="bg-white rounded-[10px] p-6 w-[250px]">
    <!-- Title -->
    <h2 class="text-[32px] font-[900] mb-6 border-b border-gray-200 pb-[16px]">
      Hello, Maged
    </h2>

    <!-- Menu -->
    <div class="flex flex-col gap-4">

      <!-- My Programs -->
      <NuxtLink
        to="/my-account"
        class="px-3 py-1 rounded-md font-semibold cursor-pointer"
        :class="isActive('/my-account')
          ? 'bg-red-50 text-primary-20'
          : 'text-primary-10 font-medium'"
      >
        My Programs
      </NuxtLink>

      <!-- Profile Info -->
      <NuxtLink
        to="/my-account/profile-info"
       class="px-3 py-1 rounded-md font-semibold cursor-pointer"
        :class="isActive('/my-account/profile-info')
          ? 'bg-red-50 text-primary-20'
          : 'text-primary-10 font-medium'"
      >
        Profile Info
      </NuxtLink>

      <!-- Favorites -->
      <NuxtLink
        to="/my-account/favorites"
       class="px-3 py-1 rounded-md font-semibold cursor-pointer"
        :class="isActive('/my-account/favorites')
        ? 'bg-red-50 text-primary-20'
          : 'text-primary-10 font-medium'"
      >
        Favorites
      </NuxtLink>

      <!-- Logout -->
      <div
        class="cursor-pointer text-gray-500"
        @click="handleLogout"
      >
        Logout
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const userStore = useUserStore()

    // ACTIVE CLASS CHECKER
    const isActive = (path: string) => {
      return route.path === path
    }

    // LOGOUT
    const handleLogout = async () => {
      await userStore.logout()
      router.push('/')
    }

    return {
      route,
      router,
      userStore,
      isActive,
      handleLogout,
    }
  },
})
</script>
