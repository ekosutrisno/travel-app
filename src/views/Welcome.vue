<template>
  <div class="max-w-screen bg-gradient-to-r from-purple-700 to-basePurple h-full min-h-screen mx-auto flex flex-col items-center justify-center space-y-40 lg:space-y-10 p-6 relative">
     <!-- <img class="w-full h-full object-cover inset-0 absolute z-0 opacity-60" src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="bg-cs"> -->
      <div class="z-10 lg:text-center">
         <p class="text-white text-3xl font-semibold">This is no longer <br class="lg:hidden"> the era for slow <br class="lg:hidden"> Travel</p>
         <p class="text-gray-200 mt-2">
            Enjoy travel speed that reaches all corners of the country.
         </p>
      </div>
      <div class="w-full max-w-xs z-10">
         <router-link to="/u/shuttle" class="py-2 px-4 inline-flex items-center justify-center w-full mx-auto font-semibold rounded-md bg-basePurple border border-opacity-50 border-purple-400 text-white">
            <div class="inline-flex items-center space-x-2">
               <span>Get Started</span>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
               </span>
            </div>
         </router-link>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>