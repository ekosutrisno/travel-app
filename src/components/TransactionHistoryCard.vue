<template>
<div class="p-4 hover:shadow-xl bg-pattern relative sm:cursor-pointer rounded-md border bg-white">
   <svg xmlns="http://www.w3.org/2000/svg" area-hidden="true" :class="[idx == 0 ? 'text-basePurple top-3 right-2 h-10 w-10': 'text-gray-300 top-3 right-2 h-6 w-6']" class="absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
   </svg>
      <div class="inline-flex w-full py-2 items-center border-b">
         <span class="p-2 bg-gray-100 text-basePurple rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
         </span>
         <div class="p-2">
            <p class="text-sm font-semibold inline-flex items-center space-x-0.5">
               <span>{{ trx.namaPenumpang}} </span>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" :class="[trx.userId.isActive ? 'text-green-500' : 'text-gray-300']" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
               </span>
            </p>
            <span class="block text-xs text-gray-400">{{ trx.userId.level}} | {{trx.nomorHP}}</span>
         </div>
      </div>
      <div class="flex flex-col border-b w-full space-y-2 p-2">
         <div class="text-sm">
            <p class="text-xs text-gray-400">Terminal Asal</p>
            <p>{{ trx.asalShuttelId.namaShuttle }} <span class="text-xs text-gray-400">({{trx.asalShuttelId.kotaId.namaKota}})</span></p>
         </div>
         <div class="text-sm">
            <p class="text-xs text-gray-400">Terminal Tujuan</p>
            <p>{{ trx.tujuanShuttelId.namaShuttle }} <span class="text-xs text-gray-400">({{trx.tujuanShuttelId.kotaId.namaKota}})</span></p>
         </div>
         <div class="text-sm">
            <p class="text-xs text-gray-400">Nomor Kursi</p>
            <p>{{ trx.nomorKursi }}</p>
         </div>
         <div class="text-sm">
            <p class="text-xs text-gray-400">Tanggal Keberangkatan</p>
            <p>{{ formatDate(trx.tanggal) }}</p>
         </div>
         <div class="text-sm">
            <p class="text-xs text-gray-400">Jam Keberangkatan</p>
            <p> {{trx.jamKeberangkatanId.jam}} WIB</p>
         </div>
         <div class="text-sm">
            <p class="text-xs text-gray-400">Kode Bus</p>
            <p> A334-{{idx}}</p>
         </div>
      </div>
      <div class="flex flex-col border-b w-full space-y-2 p-2">
         <div class="text-sm inline-flex justify-between w-full">
            <p class="text-xs text-gray-400">Harga Tiket</p>
            <p> Rp{{trx.harga ? trx.harga.harga : 35000}}</p>
         </div>
         <div class="text-sm inline-flex justify-between w-full">
            <p class="text-xs text-gray-400">Biaya Admin</p>
            <p> Rp{{2500}}</p>
         </div>
      </div>
      <div class="flex flex-col w-full p-2">
         <div class="text-sm inline-flex justify-between w-full font-semibold">
            <p class="text-xs text-gray-400">Total Harga</p>
            <p> Rp{{trx.harga ? trx.harga.harga + 2500 : (35000 + 2500)}}</p>
         </div>
      </div>
      <div class="flex flex-col w-full p-2">
         <div class="text-xs w-full">
            <p class="text-gray-400 mb-2">Order Descriptions</p>
            <p>Anda telah mealakukan pemesanan tiket anda, diharapkan tiba 1 jam sebelum keberangkatan. Refund minimal h-1 keberangkatan.</p>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Transaction } from '../@types/interface';
import { formatDate } from '../config/utills';

export default defineComponent({
   props:{
      trx:{
         type: Object as ()=>Transaction,
         required: true
      },
      idx:{
         required: true
      }
   },
   setup () {
      
      return {
         formatDate
      }
   }
})
</script>