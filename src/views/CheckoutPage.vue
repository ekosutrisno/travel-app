<template>
   <div>
      <div v-for="transaction in transactions" :key="transaction.transactionId">
         {{ transaction.transaksiId }}-> {{transaction.userId.nama}}
      </div>
   </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'

export default defineComponent({
   setup () {
      const store = useStore();
      const route = useRoute();

      const state = reactive({
         transactions: computed(()=> store.state.transactionModule.transactions),
      });

      onMounted(async ()=>{
         await store.dispatch('transactionModule/setTransaction', route.params.userId);
      })

      return {
         ...toRefs(state),
      }
   }
})
</script>