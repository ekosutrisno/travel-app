<template>
   <div class="h-full relative min-h-screen flex items-center justify-center">
      <!-- <BgWorld class="absolute inset-0 max-w-5xl mx-auto opacity-40"/> -->
      <div class="grid overflow-hidden z-20 grid-cols-2 w-full max-w-5xl  mx-auto border-2 border-purple-400 rounded-md">
         <div class="bg-gradient-to-br from-purple-700 to-basePurple">
            <div class="flex flex-col space-y-3 items-center justify-center p-4 text-white">
               <div class="flex flex-col items-center justify-center space-y-1">
                  <p class="text-xs">Kota Asal</p>
                  <div class="p-2.5 shadow-sm hover:shadow-xl transition duration-100 font-semibold md:cursor-pointer rounded-md inline-flex items-center space-x-1 bg-basePurple border border-opacity-50 border-purple-400">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                     </span>
                     <span> {{shuttleAsal ? shuttleAsal.namaShuttle : 'Pilih Shuttle Asal'}} </span>
                  </div>
               </div>
               <span class="-mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" area-hidden="true" class="h-6 w-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                  </svg>         
               </span>
               <div class="flex flex-col items-center justify-center space-y-1">
                  <p class="text-xs">Kota Tujuan</p>
                  <div class="p-2.5 shadow-sm hover:shadow-xl transition duration-100 font-semibold md:cursor-pointer rounded-md inline-flex items-center space-x-1 bg-basePurple border border-opacity-50 border-purple-400">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                     </span>
                     <span>  {{shuttleTujuan ? shuttleTujuan.namaShuttle : 'Pilih Shuttle Tujuan'}} </span>
                  </div>
               </div>
               <header class="col-start-1 my-3 row-start-1 flex flex-wrap items-baseline">
                  <h2 class="flex-none text-lg leading-6 font-medium text-gray-200 mr-3">Info</h2>
                  <p class="hidden sm:block flex-auto text-gray-300 text-sm leading-5 font-medium">Info order ticket anda</p>
                  <p class="hidden sm:block flex-none w-full text-sm leading-5 mt-1">Anda telah mealakukan pemilihan detail pemesanan tiket anda, dan anda akan berangkat pada pukul <span class="font-semibold">{{jam.jam}}</span> WIB, dan diharapkan agar datang 1 jam sebelum jam keberangkatan.</p>
               </header>
            </div>
         </div>
         <div class="p-4 px-8">
            <header class="col-start-1 my-3 row-start-1 flex flex-wrap items-baseline">
               <h2 class="flex-none text-lg leading-6 font-medium text-gray-800 mr-3">Payment Details (Test)</h2>
               <p class="hidden sm:block flex-none w-full text-sm leading-5 mt-1">Complete your purchase by providing your payment details.</p>
            </header>
            <form @submit.prevent="bayarAction">
               <div class="col-span-6 sm:col-span-3">
                  <label for="nama_penumpang" class="block text-sm font-medium text-gray-700">Nama penumpang</label>
                  <input type="text" name="nama_penumpang" :value="user.nama" id="nama_penumpang" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
               </div>
               <div class="col-span-6 sm:col-span-3">
                  <label for="tanggal_berangkat"  class="block text-sm font-medium text-gray-700">Tanggal berangkat</label>
                  <input type="date" required name="tanggal_berangkat" v-model="tanggalKeberangkatan" id="tanggal_berangkat" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
               </div>
               <div class="grid grid-cols-2 gap-2 mt-4">
                  <div>
                     <label for="no_telepone" class="block text-sm font-medium text-gray-700">No Telephone</label>
                     <input type="text" required name="no_telepone" v-model="nomorTelephone" id="no_telepone" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                  <div>
                     <label for="no_kursi" class="block text-sm font-medium text-gray-700">Nomor Kursi</label>
                     <input type="number" required name="no_kursi" min="0" v-model.number="nomorKursi" id="no_kursi" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
               </div>
               <div class="mt-4">
                  <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-basePurple hover:bg-base100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                     Bayar Rp35000
                  </button>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'
import BgWorld from '../components/svg/BgWorld.vue';

export default defineComponent({
  components: { BgWorld },
   setup () {
      const store = useStore();
      const route = useRoute();
      const router = useRouter();

      const state = reactive({
         transactions: computed(()=> store.state.transactionModule.transactions),
         shuttleAsal: computed(()=> store.state.shuttleModule.shuttleAsal),
         shuttleTujuan: computed(()=> store.state.shuttleModule.shuttleTujuan),
         jam: computed(()=> store.state.shuttleModule.jam),
         user: computed(()=>store.state.userModule.user),
         tanggalKeberangkatan: '',
         nomorTelephone: '',
         nomorKursi: ''
      });

      onMounted(async ()=>{
         await store.dispatch('transactionModule/setTransaction', route.params.userId);
      })

      const converTanggal = (tanggal: any) =>{
         var tglReplace = tanggal.replaceAll('-','');
         return parseInt(tglReplace);
      }

      const bayarAction = ()=>{
         
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
         bayarAction
      }
   }
})
</script>