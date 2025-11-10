<template>
  <div :class="darkMode ? 'bg-primary-10' : 'bg-gray-100'">
    <div class="container mx-auto px-[80px] py-[30px]">
      <div class="flex justify-between items-center">
        <!-- Header -->
        <div class="flex items-center justify-between py-4 px-6 max-w-[450px]">
          <ChevronLeft
           class="cursor-pointer"
            :colorIcon="darkMode ? 'white' : '#10171F'"
            @click="prevMonth"
            v-show="month !== 0"
          />
          <div class="font-[900] text-[32px]  px-6 min-w-[19rem]" :class="darkMode ?  'text-white' : 'text-primary-10' ">
            <span>{{ MONTH_NAMES[month] }}</span>
            <span class="ml-1 ">{{ year }}</span>
          </div>
          <ChevronRight
           class="cursor-pointer"
            :colorIcon="darkMode ? 'white' : '#10171F'"
            @click="nextMonth"
            v-show="month !== 11"
          />
        </div>

        <!-- toggle btn -->
        <div>
          <label class="inline-flex items-center cursor-pointer">
            <span
             :class="darkMode ? 'text-gray-300' : 'text-primary-10'"
              class="ms-3 text-sm font-[100]"
              >Ligth</span
            >
            <input type="checkbox" v-model="darkMode" class="sr-only peer" />
            <div
              class="
              mx-2
              relative w-11 h-6 rounded-full peer
              after:content-[''] after:absolute after:top-[2px] after:start-[2px]
             after:border-gray-300 after:border after:rounded-full
              after:h-5 after:w-5 after:transition-all
              peer-checked:after:translate-x-full"
                :class="darkMode 
              ? 'bg-white after:bg-black'    // DARK MODE
              : 'bg-gray-300 after:bg-white' // LIGHT MODE
            "
            ></div>

            <span
             :class="darkMode ? 'text-gray-300' : 'text-primary-10'"
              class="ms-3 text-sm font-[100]"
              >Dark</span
            >
          </label>
        </div>
      </div>

      <!-- Calendar Body -->
      <div class="mx-1 mb-1">
        <div class="flex flex-wrap mb-2">
          <div
            v-for="(day, index) in DAYS"
            :key="index"
            class="w-[14.28%] px-2 py-2 text-end font-[900] text-[24px] text-secondary-40 uppercase "
          >
            {{ day }}
          </div>
        </div>

        <!-- ✅ Updated Grid -->
        <div class="grid grid-cols-7 divide-x divide-y">
          <!-- Days before current month -->
          <div
            v-for="(b, i) in blankdays"
            :key="'b'+i"
            class="h-28 px-2 py-2 border"
            :class="darkMode ? 'text-gray-600 border-gray-600' :  'text-gray-300 border-gray-300'"
          >
            {{ b.date }}
          </div>

          <!-- Current Month Days -->
          <div
            v-for="date in no_of_days"
            :key="'d'+date.date"
            class="h-28 px-2 py-2 border border-[#CFD1D2]"
          >
            <div
              class="w-8 h-8 mt-2 flex items-center justify-center rounded-full"
              :class="isToday(date) ? 'bg-primary-20 text-white' 
              : darkMode ?  'text-gray-300' : 'text-gray-700' "
            >
              {{ date.date }}
            </div>

            <div class="mt-1 overflow-y-auto h-20">
              <!-- events go here -->
              <!-- <div
                class="text-[16px] font-[900] bg-primary-20 text-white rounded-[21px] px-[16px] py-1 capitalize">
               {{  truncateWords("title event title event title event") }}
              </div> -->
            </div>
          </div>

          <!-- Blank After -->
          <div
            v-for="(b, i) in blankdaysAfter"
            :key="'b-after'+i"
            class="h-28 px-2 py-2 border"
            :class="darkMode ? 'text-gray-600 border-gray-600' :  'text-gray-300 border-gray-300'"
          >
            {{ b.date }}
          </div>
        </div>
      </div>
       
      <PopupCalendar />
      <!-- Calendar popup  -->
    </div>
  </div>
</template>

<script>
import ChevronLeft from '../../svg/ChevronLeft.vue';
import ChevronRight from '../../svg/ChevronRight.vue';
import { useTruncateWords } from "@/composables/useTruncateWords";
import PopupCalendar from './PopupCalendar.vue';

export default {
    components: { ChevronLeft, ChevronRight, PopupCalendar },
      created() {
    // ✅ Retrieve the function from the composable
    const { truncateWords } = useTruncateWords();
    this.truncateWords = truncateWords;
  },
  data() {
    return {
      darkMode: false, 
      MONTH_NAMES: ["January","February","March","April","May","June","July","August","September","October","November","December"],
      DAYS: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      month: 0,
      year: 0,
      no_of_days: [],
      blankdays: [],
    }
  },
  mounted() {
    const today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.getNoOfDays();
  },
  methods: {
     truncateWords(text) {},
    isToday(date) {
      const today = new Date();
      return today.toDateString() === new Date(this.year, this.month, date.date).toDateString();
    },
    getNoOfDays() {
  const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
  const firstDay = (new Date(this.year, this.month, 1).getDay() + 6) % 7;

  // Previous month days
  const prevMonthDays = new Date(this.year, this.month, 0).getDate();

  // Start blank days filled with previous month dates
  this.blankdays = [];
  for (let i = firstDay; i > 0; i--) {
    this.blankdays.push({
      date: prevMonthDays - i + 1,
      isOtherMonth: true
    });
  }

  // Current month days
  this.no_of_days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    this.no_of_days.push({
      date: i,
      isOtherMonth: false
    });
  }

  // After month (next month)
  const totalCells = this.blankdays.length + this.no_of_days.length;
  const remainingCells = (7 - (totalCells % 7)) % 7;

  this.blankdaysAfter = [];
  for (let i = 1; i <= remainingCells; i++) {
    this.blankdaysAfter.push({
      date: i,
      isOtherMonth: true
    });
  }
},

    prevMonth() {
      if (this.month > 0) {
        this.month--;
        this.getNoOfDays();
      }
    },
    nextMonth() {
      if (this.month < 11) {
        this.month++;
        this.getNoOfDays();
      }
    }
  }
}
</script>
