<template>
    <section>
        <div class="flex flex-col w-[70vw]">
        <div class="pb-[16px]">
        <BreadcrumbComponent 
        :breadcrumbArray="breadcrumbArray" 
        :fontSize="12" 
        :textColor="'gray-600'"/>
        </div>
        <div class="flex justify-between">
            <h1 class="font-[900] text-[32px] text-primary-10">My Programs</h1>
            <div>
                <MainBtn :title="'Register New Program'"/>
            </div>
        </div>

        <div class="pt-[32px] flex flex-col gap-[24px]">
          <div v-for="(item, index) in 5" :key="index">
            <MyProgramsCard :isFavoriteCard="true" />
          </div>
        </div>
        </div>
    </section>
</template>


<script lang="ts">

import { defineComponent, type PropType } from 'vue'
import BreadcrumbComponent from "../breadcrumb/Breadcrumb.vue";
import MainBtn from '../buttons/MainBtn.vue';
import MyProgramsCard from '../cards/MyProgramsCard.vue';


export default defineComponent({
  components: {
    BreadcrumbComponent,
    MainBtn,
    MyProgramsCard
  },

  data() {
    return {
        breadcrumbArray: [
                { name: 'Home', to: '/' },
                { name: 'My Programs', to: '/my-account' }
            ]

    }
  }
})
</script>
