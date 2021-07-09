<template>
 <header class="bg-gradient-to-r from-purple-700 to-basePurple h-full md:h-80 px-4 sm:px-6 lg:px-16">
   <Header :title="'Shuttles'"/>
   <div class="grid lg:grid-cols-2">
     <div class="w-full hidden lg:block flex-none text-center xl:w-auto xl:flex-auto xl:text-left mt-10">
       <h1 class="font-display text-white text-3xl leading-9 font-semibold sm:text-4xl sm:leading-10">
         TravelApp
       </h1>
      <div class="flex flex-wrap justify-center xl:justify-start whitespace-no-wrap text-purple-100 font-medium mt-3 leading-5">
          <div class="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8 mt-3">
            <div class="mr-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="text-purple-400"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>
            </div>
            <div>23<!-- --> Kota/Provinsi</div>
          </div>
      </div>
      </div>
     <div>
       <div class="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3 lg:space-x-10 p-4 text-white">
        <div class="inline-block items-center space-y-1">
            <p class="text-xs">Kota Asal</p>
            <div class="font-semibold md:cursor-pointer rounded-md inline-flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
              </span>
              <span> {{shuttleAsal ? shuttleAsal.namaShuttle : 'Pilih Shuttle Asal'}} </span>
            </div>
        </div>
          <div class="inline-block items-center space-y-1">
            <p class="text-xs">Kota Tujuan</p>
            <div class="font-semibold md:cursor-pointer rounded-md inline-flex items-center space-x-1">
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
              </span>
              <span>  {{shuttleTujuan ? shuttleTujuan.namaShuttle : 'Pilih Shuttle Tujuan'}} </span>
            </div>
        </div>
      </div>
      <div class="flex px-4 pb-5 md:py-0 flex-col">
          <div class="inline-block items-center  space-y-2.5 text-white">
              <p class="text-xs">Jam Keberangkatan</p>
              <div @click="setSelectedJam(jamKbr)" v-for="jamKbr in jamKeberangkatan" :key="jamKbr.jamKeberangkatanId" class="font-semibold relative md:cursor-pointer rounded-md inline-flex items-center space-x-1 mr-4">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                <span>  {{jamKbr ? jamKbr.jam : '00:00'}} </span>
                <svg v-if="jamKbr.jamKeberangkatanId == jam.jamKeberangkatanId" xmlns="http://www.w3.org/2000/svg" area-hidden="true" class="absolute -top-2 -right-2 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
          </div>
      </div>
        <div class="w-full p-4 flex items-center justify-end">
          <router-link :to="{path:`/u/checkout/${user.userId}`}" class="p-3 w-max text-sm text-gray-500 font-semibold md:cursor-pointer rounded-md inline-flex items-center space-x-1 bg-white sm:border border-opacity-50 hover:bg-basePurple hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>
              Checkout
            </span>
        </router-link>
      </div>
     </div>
   </div>
 </header>
 
 <!-- Search -->
 <section class="h-20 border-b shadow-sm flex items-center the-header px-4 sm:px-6 lg:px-16 sticky top-0 z-20">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input type="search" v-model="filterQuery" class="w-full rounded bg-transparent border-0 focus:border-transparent focus:ring-transparent text-lg py-3 px-4 placeholder-gray-600 focus:placeholder-gray-400" placeholder="Search all shuttle">
 </section>
 
 <!-- Shuttle -->
 <section class="grid nv-transition h-full border-b md:grid-cols-2 sm:px-6 lg:px-16">
   <div class="border-b md:border-r md:border-b-0 p-4 md:px-8">
     <header class="col-start-1 my-3 row-start-1 flex flex-wrap items-baseline">
       <h2 class="flex-none text-lg leading-6 font-medium text-gray-900 mr-3">Asal</h2>
       <p class="block flex-auto text-gray-400 text-sm leading-5 font-medium">Semua Pilihan Shuttle Asal
       </p>
       <p class="block flex-none w-full text-sm leading-5 mt-3">Merupakan pilihan semua terminal Asal keberangkatan dan diharapkan Anda memilih dengan teliti.</p>
     </header>
    <div class="grid md:grid-cols-2 gap-4 py-3">
      <ShuttleCard 
          v-for="shuttle in filteredShuttle" 
          :key="shuttle.shuttleId"
          :shuttle="shuttle"
          @click="setSelectedShuttle(shuttle, true)"
          :checked="shuttle.shuttleId == shuttleAsal.shuttleId"
        />
    </div>
   </div>
   <div class="p-4 md:px-8">
     <header class="col-start-1 my-3 row-start-1 flex flex-wrap items-baseline">
       <h2 class="flex-none text-lg leading-6 font-medium text-gray-900 mr-3">Tujuan</h2>
       <p class="flex-auto text-gray-400 text-sm leading-5 font-medium">Semua Pilihan Shuttle Tujuan</p>
       <p class="flex-none w-full text-sm leading-5 mt-3">Merupakan pilihan semua terminal tujuan keberangkatan dan diharapkan Anda memilih dengan teliti.</p>
     </header>
    <div class="grid md:grid-cols-2 gap-4 py-3">
      <ShuttleCard 
          v-for="shuttle in filteredShuttle" 
          :key="shuttle.shuttleId"
          :shuttle="shuttle"
          @click="setSelectedShuttle(shuttle, false)"
          :checked="shuttle.shuttleId == shuttleTujuan.shuttleId"
        />
    </div>
   </div>
 </section>

 <!-- Footer -->
 <footer class="flex  items-center justify-center py-5 bg-gray-50 px-4 sm:px-6 lg:px-16">
   <div class="text-indigo-400 font-semibold text-xs">&copy; ExoApp Corporation {{new Date().getFullYear()}} v0.0.1</div>
 </footer>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { JamKeberangkatan, Shutlle } from "../@types/interface";
import ShuttleCard from "../components/ShuttleCard.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  components: {
    ShuttleCard,
    Header, 
  },
  setup() {
    const store = useStore();
    const state = reactive({
      filterQuery: '',
      shuttles: computed(()=> store.state.shuttleModule.shuttles),
      jamKeberangkatan: computed(()=> store.state.shuttleModule.jamKeberangkatan),
      jam: computed(()=> store.state.shuttleModule.jam),
      shuttleAsal: computed(()=> store.state.shuttleModule.shuttleAsal),
      shuttleTujuan: computed(()=> store.state.shuttleModule.shuttleTujuan),
      user: computed(()=>store.state.userModule.user),
    });

    const filteredShuttle = computed(() => {
        return state.shuttles.filter((shuttle: Shutlle) =>{
           return shuttle
                    .namaShuttle.toLowerCase()
                    .includes(state.filterQuery.toLowerCase()) || 
                  shuttle
                    .kotaId.namaKota.toLowerCase()
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

    const setSelectedJam = (jam: JamKeberangkatan) => {
        store.dispatch('shuttleModule/setJam', jam);
    }

    return {
      ...toRefs(state),
      filteredShuttle,
      setSelectedShuttle,
      setSelectedJam
    };
  },
});
</script>