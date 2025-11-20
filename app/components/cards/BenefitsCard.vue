<template>
  <div class="block h-full w-full p-[32px] bg-white rounded-[16px] shadow-md">
    <component :is="iconMap[title]" aria-hidden="true" />
    <h2
      class="mb-[12px] mt-[32px] font-[900] text-[28px] tracking-tight text-primary-10"
    >
      {{ title }}
    </h2>
    <p class="text-gray-600 text-[20px]">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts">
import VideoPlayback from '../svg/VideoPlayback.vue';
import AnalyticsChat from '../svg/AnalyticsChat.vue';
import TimerDesktop from '../svg/TimerDesktop.vue';
import UserStar from '../svg/UserStar.vue';
import library from '../svg/library.vue';
import StatsUp from '../svg/StatsUp.vue';
import UserSettings from '../svg/UserSettings.vue';
import Team from '../svg/Team.vue';
import Handshake  from '../svg/Handshake.vue';
import AddUser  from '../svg/AddUser.vue';
import RocketMoney  from '../svg/RocketMoney.vue';
import MegaphoneAlt  from '../svg/MegaphoneAlt.vue';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconMap(): any{
      return {
        'Wide Course Library': library,
        'Interactive Experience': VideoPlayback,
        'Progress Tracking': AnalyticsChat,
        'Flexible Access': TimerDesktop,
        'Expert-Led': UserStar,
        'Active Engagement': Handshake,
        'Real-World Relevance': StatsUp ,
        'Deep Retention': UserSettings ,
        'Team & Personal Growth': Team ,
        'HR Consultation': AddUser,
        'Sales Consultation': RocketMoney,
        'Online & Offline Marketing Consultation': MegaphoneAlt,
      }
    }
}
};
</script>
