<template>
 <header class="bg-gradient-to-r from-purple-700 to-basePurple h-80 px-4 sm:px-6 lg:px-16">
   <div class="flex border-b border-indigo-700 border-opacity-50 items-center justify-between py-5 text-white">
     <div class="text-2xl font-semibold inline-flex items-center space-x-2">
       <span>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
       </span>
       <span>TravelApp</span>
     </div>
     <div class="inline-flex items-center space-x-2 font-semibold">
       <p> {{ user ? user.nama : 'Consument'}} </p>
       <img class="h-10 w-10 rounded-full border-2" src="https://cdn.dribbble.com/users/4113503/avatars/normal/8a6dc47aa73ff9ebd39c20141d4c9d86.png?1589054783" alt="profile">
     </div>
   </div>
   <div class="flex space-x-3 lg:space-x-10 items-center justify-center p-4 text-white">
     <div class="inline-block items-center space-y-1">
        <p class="text-sm">Kota Asal</p>
        <div class="p-2 shadow-sm rounded-md inline-flex items-center space-x-1 bg-basePurple border border-opacity-50 border-purple-400">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
          </span>
          <span> {{shuttleAsal.namaShuttle}} </span>
        </div>
     </div>
     <span class="-mb-5">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
     </span>
      <div class="inline-block items-center space-y-1">
        <p class="text-sm">Kota Tujuan</p>
        <div class="p-2 shadow-sm rounded-md inline-flex items-center space-x-1 bg-basePurple border border-opacity-50 border-purple-400">
          <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
          </span>
          <span>  {{shuttleTujuan.namaShuttle}} </span>
        </div>
     </div>
   </div>
   <div class="flex items-center justify-center mt-5">
     <button class="py-2 px-5 bg-purple-50 rounded-md">
      Checkout</button>
   </div>
 </header>
 <section class="h-20 border-b shadow-sm flex items-center bg-white px-4 sm:px-6 lg:px-16 sticky top-0">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input type="text" v-model="filterQuery" class="w-full text-lg focus:outline-none appearance-none py-3 px-4 placeholder-gray-600 focus:placeholder-gray-400" placeholder="Search all shuttle">
 </section>
 <!-- Shuttle -->
 <section class="grid h-full border-b md:grid-cols-2 px-4 sm:px-6 lg:px-16">
   <div class="border-b md:border-r md:border-b-0 p-4 px-8 grid md:grid-cols-2 gap-4">
     <ShuttleCard 
        v-for="shuttle in filteredShuttle" 
        :key="shuttle.shuttleId"
        :shuttle="shuttle"
        @click="setSelectedShuttle(shuttle, true)"
        :checked="shuttle.shuttleId == shuttleAsal.shuttleId"
      />
   </div>
   <div class="p-4 px-8 grid md:grid-cols-2 gap-4">
     <ShuttleCard 
        v-for="shuttle in filteredShuttle" 
        :key="shuttle.shuttleId"
        :shuttle="shuttle"
        @click="setSelectedShuttle(shuttle, false)"
        :checked="shuttle.shuttleId == shuttleTujuan.shuttleId"
      />
   </div>
 </section>

 <!-- Footer -->
 <footer class="flex items-center justify-between py-5 bg-gray-50 px-4 sm:px-6 lg:px-16">
   <div class="inline-flex items-center space-x-3 text-sm">
      <div class="inline-flex items-center space-x-2">
        <img class="h-8 w-8 rounded-full border" src="https://avatars.githubusercontent.com/u/77217289?s=64&v=4" alt="safrizal">
        <p>Backend by <a class="text-indigo-400 hover:text-opacity-70 font-semibold" href="https://github.com/safrizal997" target="_blank">@Safrizal</a></p>
      </div>
      <div class="inline-flex items-center space-x-2">
        <img class="h-8 w-8 rounded-full border" src="https://avatars.githubusercontent.com/u/51039205?s=60&v=4" alt="ekosutrisno">
        <p>Frontend by <a class="text-indigo-400 hover:text-opacity-70 font-semibold" href="https://github.com/ekosutrisno" target="_blank">@EkoSutrisno</a></p>
      </div>
   </div>
   <div class="text-indigo-400 font-semibold text-xs">&copy; ExoApp Corporation {{new Date().getFullYear()}}</div>
 </footer>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { Shutlle } from "../@types/interface";
import ShuttleCard from "../components/ShuttleCard.vue";

export default defineComponent({
  components: { ShuttleCard },
  setup() {
    const store = useStore();
    const state = reactive({
      filterQuery: '',
      shuttles: computed(()=> store.state.shuttleModule.shuttles),
      shuttleAsal: computed(()=> store.state.shuttleModule.shuttleAsal),
      shuttleTujuan: computed(()=> store.state.shuttleModule.shuttleTujuan),
      user: computed(()=>store.state.userModule.users[0]) || {nama: 'Safrizal'}
    });

    const filteredShuttle = computed(() => {
        return state.shuttles.filter((shuttle: Shutlle) =>{
           return shuttle
              .namaShuttle.toLowerCase()
              .includes(state.filterQuery.toLowerCase())
        })
      }
    );

    const setSelectedShuttle = (shutlle: Shutlle, isAsal: boolean) => {
      if(isAsal)
        store.dispatch('shuttleModule/setShuttleAsal', shutlle);
      else  
        store.dispatch('shuttleModule/setShuttleTujuan', shutlle);
    }

    return {
      ...toRefs(state),
      filteredShuttle,
      setSelectedShuttle
    };
  },
});
</script>