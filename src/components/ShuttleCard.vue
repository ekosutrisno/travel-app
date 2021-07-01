<template>
 <div :class="[checked ? 'from-indigo-400 to-basePurple text-white':'hover:from-indigo-400 hover:to-basePurple hover:text-white']" class="rounded-lg relative border p-2 flex flex-col space-y-2 group hover:shadow-2xl bg-gradient-to-br transition cursor-pointer">
  <div class="inline-flex items-center space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" :class="[checked ? 'text-gray-200':'group-hover:text-gray-200 text-gray-400 ']" class="h-5 w-5 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    <span class="truncate">{{shuttle.namaShuttle}}</span>
  </div>
  <div class="inline-flex items-center space-x-2">
    <span class="text-xs">{{shuttle.kotaId.namaKota}}</span>
  </div>

  <!-- Decorate -->
  <svg v-if="checked" xmlns="http://www.w3.org/2000/svg" area-hidden="true" :class="[checked ? '': '']" class="h-6 w-6 transform rotate-90 top-0 right-2 absolute text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { Shutlle } from "../@types/interface";

export default defineComponent({
  props: {
    shuttle: {
      type: Object as () => Shutlle,
      required: true,
    },
    checked:{
      type: Boolean,
      required: true
    }
  },
  setup() {
    const store = useStore();

    const state = reactive({
      shuttleAsal: computed(()=> store.state.shuttleModule.shuttleAsal),
      shuttleTujuan: computed(()=> store.state.shuttleModule.shuttleTujuan),
    })
    return {
      ...toRefs(state)
    };
  },
});
</script>