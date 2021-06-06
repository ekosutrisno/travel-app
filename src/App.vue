<template>
  <div class="bg-gradient-to-b from-base to-indigo-200 h-screen font-quicksand">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap");
</style>

