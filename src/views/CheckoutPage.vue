<template>
   <div class="h-full relative min-h-screen p-4 flex items-center justify-center">
      <div class="relative w-full max-w-xl  mx-auto border border-purple-200 rounded-md">
         <img class="absolute top-0 right-2 w-16 sm:w-24 rounded-full" src="https://www.bankmandiri.co.id/image/journal/article?img_id=44321257&t=1615601162953" alt="logo">
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
            <form @submit.prevent="bayarAction" class="space-y-3">
               <div class="col-span-6 sm:col-span-3">
                  <label for="nama_penumpang" class="block text-sm font-medium text-gray-700">Nama penumpang</label>
                  <input type="text" required name="nama_penumpang" :value="user.nama" id="nama_penumpang" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-sm" placeholder="ex: Bambang"/>
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

export default defineComponent({
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