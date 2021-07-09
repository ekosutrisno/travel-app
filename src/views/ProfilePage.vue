<template>
<header class="bg-gradient-to-r from-purple-700 to-basePurple h-80 px-4 sm:px-6 lg:px-16">
   <Header :title="'Profile'"/>
</header>
<section class="-mt-56 nv-transition relative h-full px-4 pb-5 flex items-center justify-center">
   <div class="relative w-full bg-white max-w-xl mx-auto border rounded-md">
      <button @click="toggleEdit" class="absolute top-5 transition right-5 text-gray-300 p-2 rounded-md hover:text-basePurple">
         <svg xmlns="http://www.w3.org/2000/svg" area-hidden="true" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
         </svg>
      </button>
      <div class="p-4 md:px-8">
         <div class="inline-flex">
            <img class="w-28 h-28 rounded-full" :src="photoUrl" alt="photo-profile">
         </div>
         <header class="col-start-1 my-3 row-start-1 flex flex-wrap items-baseline">
            <h2 class="flex-none text-lg leading-6 font-medium text-gray-800 inline-flex items-center"> {{user.nama}}  
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" :class="[user.isActive ? 'text-green-500' : 'text-gray-300']" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
               </span>
            </h2>
            <div class="flex-none block rounded px-2 text-basePurple bg-purple-100 text-xs ml-2 leading-6 font-medium"> {{user.level}}</div>
            <p class="block flex-none w-full text-sm leading-5 mt-1">Terimaksih banyak {{user.nama}} telah menggunakan layanan applikasi TravelApp.</p>
            <div class="mt-4 md:space-x-2">
                  <div class="inline-block items-center space-y-1">
                  <p class="text-xs">Kota Asal</p>
                  <div class="p-2.5 text-sm text-gray-500 font-semibold md:cursor-pointer rounded-md inline-flex items-center space-x-1 bg-white sm:border border-opacity-50 hover:bg-basePurple hover:text-white">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                     </span>
                     <span> {{ user.shuttleId ? user.shuttleId.namaShuttle : 'No Data'}} </span>
                  </div>
               </div>
            </div>
         </header>
         <form v-if="isOnEdit" @submit.prevent="onEditUserProfile" class="space-y-3 nv-transition">
               <Listbox as="div" v-model="shuttleAsal">
                  <ListboxLabel class="block text-sm font-medium text-gray-700">
                     Shuttle
                  </ListboxLabel>
                  <div class="mt-1 relative">
                     <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                     <span class="flex items-center">
                        <span class="ml-3 block truncate">{{ shuttleAsal.namaShuttle }}</span>
                     </span>
                     <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                     </span>
                     </ListboxButton>

                     <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                     <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        <ListboxOption as="template" v-for="shuttle in shuttles" :key="shuttle.shuttleId" :value="shuttle" v-slot="{ active, selected }">
                           <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                           <div class="flex items-center">
                              <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                                 {{ shuttle.namaShuttle }}
                              </span>
                           </div>

                           <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                              <svg xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                              </svg>
                           </span>
                           </li>
                        </ListboxOption>
                     </ListboxOptions>
                     </transition>
                  </div>
               </Listbox>
               <div class="grid md:grid-cols-2 gap-2 mt-4">
                  <div>
                  <label for="nama_penumpang" class="block text-sm font-medium text-gray-700">Nama penumpang</label>
                  <input type="text" required name="nama_penumpang" :value="user.nama" id="nama_penumpang" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-sm" placeholder="ex: Bambang"/>
                  </div>
                  <div>
                  <label for="lavel" class="block text-sm font-medium text-gray-700">Level</label>
                  <input type="text" required name="lavel" :value="user.level" id="lavel" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-sm" placeholder="ex: Bambang"/>
                  </div>
               
            </div>
            <div class="py-6 border-t grid sm:grid-cols-2 gap-4">
               <button type="button" @click="toggleEdit" class="group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-basePurple hover:border-basePurple">
                  Cancel
               </button>
               <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-basePurple hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Update
               </button>
            </div>
         </form>
      </div>
   </div>
</section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import Header from '../components/Header.vue';

export default defineComponent({
  components: {
   Header,
   Listbox, 
   ListboxButton, 
   ListboxLabel,
   ListboxOption,
   ListboxOptions
  },
   setup () {
      const store = useStore();

      const state = reactive({
         user: computed(()=>store.state.userModule.user),
         photoUrl: computed(()=>store.state.userModule.photoUrl),
         isOnEdit: false,
         shuttles: computed(()=> store.state.shuttleModule.shuttles),
      });

      const shuttleAsal = ref(state.user.shuttleId)

      const onEditUserProfile = (e:any) => {
         
         var dataTransaction = {
            userData:{
               nama: e.target.elements[1].value,
               level: e.target.elements[2].value,
               password: state.user.password,
               shuttleId: shuttleAsal.value.shuttleId,
               userName: state.user.userName
            },
            userId: state.user.userId
         }
         store.dispatch('userModule/updateUser', dataTransaction);
      }

      const toggleEdit = ()=>{
         return state.isOnEdit = !state.isOnEdit
      }

      return {
         ...toRefs(state),
         shuttleAsal,
         onEditUserProfile,
         toggleEdit
      }
   }
})
</script>