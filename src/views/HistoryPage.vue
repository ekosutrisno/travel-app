<template>
<header class="bg-gradient-to-r from-purple-700 to-basePurple h-80 px-4 sm:px-6 lg:px-16">
   <div class="flex border-b border-indigo-700 border-opacity-50 items-center justify-between py-5 text-white">
     <div class="text-2xl font-semibold inline-flex items-center space-x-2">
       <span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
       </span>
       <span>History</span>
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
 <section class="grid relative -mt-56 h-full sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 pb-5 sm:px-6 lg:px-16">
     <TransactionHistoryCard 
        v-for="(trx, idx) in transactions"
        :key="trx.transaksiId"
        :idx="idx"
        :trx="trx"
     />
 </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useStore } from 'vuex'
import TransactionHistoryCard from '../components/TransactionHistoryCard.vue'

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
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransactionHistoryCard
  },
  setup () {
      
    const store = useStore();
    const state = reactive({
        user: computed(()=>store.state.userModule.user),
        transactions: computed(()=> store.state.transactionModule.transactions),
        profiles: profile
    })

    onMounted(()=>{
        store.dispatch('transactionModule/setTransaction', state.user.userId);
    })

    return {
        ...toRefs(state)
    }
  }
})
</script>
<style scoped>
  .bg-pattern{
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%239C92AC' fill-opacity='0.075' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

</style>