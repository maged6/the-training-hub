<template>
  <section class="p-[16px] md:p-[60px] bg-primary-10">
    <div class="bg-black rounded-[32px] flex flex-col justify-center items-center py-[80px]">
      <IntroCenterSection
        :labelSection="'Audience'"
        :labelBackgroundColor="'bg-primary-20'"
        :headerColor="'white'"
        :labelColor="'white'"
        :titleSection="'Who Should Attend'"
        :maxWidthofHeader="508"
      />
      <div class="pt-[60px]">
        <p class="font-[100] md:text-[38px] text-white flex gap-[8px] items-center">
            <User /> 
            Employees at all levels
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import IntroCenterSection from '../main-component/IntroCenterSection.vue'
import User from '~/components/svg/User.vue'

export default {
    name: 'WhoShouldAttend',
    components: { IntroCenterSection, User },
    props: {
        titleSection: { type: String, default: 'Compensation, Benefits and Incentives' },
        priceSection: { type: String, default: '9500' },
    },
}
</script>
