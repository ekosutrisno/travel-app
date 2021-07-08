<template>
<header class="bg-gradient-to-r from-purple-700 to-basePurple h-80 px-4 sm:px-6 lg:px-16">
   <div class="flex border-b border-indigo-700 border-opacity-50 items-center justify-between py-5 text-white">
     <div class="text-2xl font-semibold inline-flex items-center space-x-2">
       <span>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
         </svg>
       </span>
       <span>Checkout</span>
     </div>
     <Menu as="div" class="ml-3 relative z-40">
        <div>
          <MenuButton class="max-w-xs rounded-full cursor-default md:cursor-pointer flex items-center text-sm focus:outline-none">
            <span class="sr-only">Open user menu</span>
            <p class="mr-2"> {{ user ? user.nama : 'Consument'}} </p> 
            <img class="h-10 w-10 rounded-full border-2" src="https://cdn.dribbble.com/users/4113503/avatars/normal/8a6dc47aa73ff9ebd39c20141d4c9d86.png?1589054783" alt="profile">
          </MenuButton>
        </div>
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-for="item in profiles" :key="item.title" v-slot="{ active }">
              <router-link :to="item.to" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.title }}</router-link>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
   </div>
</header>
   <section class="-mt-56 relative h-full px-4 pb-5 flex items-center justify-center">
      <div class="relative w-full bg-white max-w-xl mx-auto border rounded-md">
         
         <div class="p-4 md:px-8">
            <header class="col-start-1 my-3 row-start-1 flex flex-wrap items-baseline">
               <h2 class="flex-none text-lg leading-6 font-medium text-gray-800 mr-3">Payment Details</h2>
               <p class="block flex-none w-full text-sm leading-5 mt-1">Complete your purchase by providing your payment details.</p>
               <div class="mt-4 md:space-x-2">
                   <div class="inline-block items-center space-y-1">
                     <p class="text-xs">Kota Asal</p>
                     <div class="p-1.5 sm:p-2.5 text-sm text-gray-500 font-semibold md:cursor-pointer rounded-md inline-flex items-center space-x-1 bg-white sm:border border-opacity-50 hover:bg-basePurple hover:text-white">
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
                     <div class="p-1.5 sm:p-2.5 text-sm text-gray-500 font-semibold md:cursor-pointer rounded-md inline-flex items-center space-x-1 bg-white sm:border border-opacity-50 hover:bg-basePurple hover:text-white">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                           </svg>
                        </span>
                        <span> {{shuttleTujuan ? shuttleTujuan.namaShuttle : 'Pilih Shuttle Tujuan'}} </span>
                     </div>
                  </div>
                   <div class="inline-block items-center space-y-1">
                     <p class="text-xs">Biaya</p>
                     <div class="p-1.5 sm:p-2.5 text-sm text-gray-500 font-semibold md:cursor-pointer rounded-md inline-flex items-center space-x-1 bg-white sm:border border-opacity-50 hover:bg-basePurple hover:text-white">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                           </svg>
                        </span>
                        <span> Rp35000 </span>
                     </div>
                  </div>
               </div>
            </header>
            <form @submit.prevent="doTransaction" class="space-y-3">
               <div class="col-span-6 sm:col-span-3">
                  <label for="nama_penumpang" class="block text-sm font-medium text-gray-700">Nama penumpang</label>
                  <input type="text" required name="nama_penumpang" readonly  :value="user.nama" id="nama_penumpang" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-sm" placeholder="ex: Bambang"/>
               </div>
               <div class="col-span-6 sm:col-span-3">
                  <label for="tanggal_berangkat"  class="block text-sm font-medium text-gray-700">Tanggal berangkat</label>
                  <input type="date" required name="tanggal_berangkat" v-model="tanggalKeberangkatan" id="tanggal_berangkat" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
               </div>
               <div class="grid md:grid-cols-2 gap-2 mt-4">
                  <div>
                     <label for="no_telepone" class="block text-sm font-medium text-gray-700">No Telephone</label>
                     <input type="number" min="0" required name="no_telepone" v-model.number="nomorTelephone" id="no_telepone" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-sm" placeholder="ex: 089912348822" />
                  </div>
                  <div>
                     <label for="no_kursi" class="block text-sm font-medium text-gray-700">Nomor Kursi</label>
                     <input type="number" required name="no_kursi" min="0" max="36" v-model.number="nomorKursi" id="no_kursi" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-sm" placeholder="ex: 1 range(1-36)"/>
                  </div>
               </div>
               <div class="py-6 border-t grid sm:grid-cols-2 gap-4">
                  <button type="button" @click="$router.back()" class="group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-basePurple hover:border-basePurple">
                     Cancel or Edit
                  </button>
                  <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-basePurple hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                     Bayar Rp35000
                  </button>
               </div>
            </form>
         </div>
      </div>
   </section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { converTanggal } from '../config/utills';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
interface IMenuItem{
   title?: string,
   to?: string
}

const profile: IMenuItem[] = [
    {
      title: 'Your Profile',
      to: '#'
    }, 
    {
      title: 'History',
      to: '/u/histories'
    },
    {
      title: 'Settings',
      to: '#'
    },
    {
      title: 'Sign out',
      to: '#'
    },
  ]

export default defineComponent({
   components:{
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
   },
   setup () {
      const store = useStore();
      const router = useRouter();

      const state = reactive({
         shuttleAsal: computed(()=> store.state.shuttleModule.shuttleAsal),
         shuttleTujuan: computed(()=> store.state.shuttleModule.shuttleTujuan),
         jam: computed(()=> store.state.shuttleModule.jam),
         user: computed(()=>store.state.userModule.user),
         profiles: profile,
         tanggalKeberangkatan: '',
         nomorTelephone: '',
         nomorKursi: '',
      });

      const doTransaction = () => {
         
         var dataTransaction = {
            asalShuttelId: state.shuttleAsal.shuttleId,
            jamKeberangkatanId: state.jam.jamKeberangkatanId,
            namaPenumpang: state.user.nama,
            nomorHP: state.nomorTelephone,
            nomorKursi: state.nomorKursi,
            tanggal: converTanggal(state.tanggalKeberangkatan),
            tujuanShuttelId: state.shuttleTujuan.shuttleId,
            userId: state.user.userId
         }

         store.dispatch('transactionModule/checkoutAction', dataTransaction)
         .then(()=>{
            router.push('/u/shuttle')
         })
      }

      return {
         ...toRefs(state),
         doTransaction
      }
   }
})
</script>