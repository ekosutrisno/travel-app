<template>
  <div class="bg-white min-h-screen font-quicksand">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const store = useStore();
    onMounted(async () => {
      await store.dispatch("shuttleModule/setShuttleData");
      await store.dispatch("userModule/setUserData");
    });

    return {};
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap");

.nv-transition {
  animation: 0.5s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

