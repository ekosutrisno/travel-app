<template>
  <div class="max-w-screen h-full min-h-screen mx-auto flex flex-col items-center justify-center space-y-40 lg:space-y-10 p-6 relative">
      <div class="w-full max-w-xs z-10">
         <router-link to="/u/shuttle" class="py-2 px-4 inline-flex items-center justify-center w-full mx-auto font-semibold rounded-md bg-basePurple border border-opacity-50 border-purple-400 text-white">
            <div class="inline-flex items-center space-x-2">
               <span>Order Ticket</span>
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