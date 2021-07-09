<template>
  <div class="max-w-screen bg-gradient-to-b via-pink-200 from-basePurple to-purple-300 h-full min-h-screen mx-auto flex flex-col items-center justify-center space-y-10 p-6 relative">
   <div class="flex items-center justify-between py-5 text-white">
       <router-link to="#" class="text-2xl font-semibold inline-flex items-center space-x-2">
         <span>TravelApp</span>
      </router-link>
   </div>
   <div>
      <Travel class="w-full"/>
   </div>
   <div class="mx-auto max-w-xs z-10">
      <router-link to="/u/shuttle" class="py-3 px-6 w-max cursor-default sm:cursor-pointer inline-flex items-center justify-center mx-auto font-semibold rounded-md bg-white text-basePurple">
         <div class="inline-flex items-center space-x-2">
            <span>Get Started</span>
         </div>
      </router-link>
   </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Travel from "../components/svg/Travel.vue";

export default defineComponent({
  components: { Header, Travel },
  setup() {
    return {};
  },
});
</script>