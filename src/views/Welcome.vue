<template>
  <div class="max-w-screen-sm h-full mx-auto flex flex-col items-center justify-center space-y-40 p-6 relative">
     <img class="w-full h-full object-cover inset-0 absolute z-0 opacity-60" src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="bg-cs">
      <div class="z-10">
         <p class="text-white text-3xl font-semibold">This is no longer <br> the era for slow <br> Travel</p>
         <p class="text-gray-200 mt-2">
            Enjoy travel speed that reaches all corners of the country.
         </p>
      </div>
      <div class="w-full z-10">
         <button class="py-2 px-4 w-full mx-auto font-semibold rounded-md bg-baseOrange bg-opacity-80 text-white">
            <div class="inline-flex items-center space-x-2">
               <span>Get Started</span>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
               </span>
            </div>
         </button>
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

<style scoped>
</style>