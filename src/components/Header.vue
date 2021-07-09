<template>
 <div class="flex border-b border-indigo-700 border-opacity-50 items-center justify-between py-5 text-white">
   <router-link to="/u/shuttle" class="text-2xl font-semibold inline-flex items-center space-x-2">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      </span>
      <span>{{ title }}</span>
   </router-link>
   <Menu as="div" class="ml-3 z-50 relative">
      <div>
         <MenuButton class="max-w-xs rounded-full cursor-default md:cursor-pointer flex items-center text-sm focus:outline-none">
         <span class="sr-only">Open user menu</span>
         <img class="h-10 w-10 rounded-full border-2" :src="photoUrl" alt="avatar">
         </MenuButton>
      </div>
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
         <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-for="item in profiles" :key="item.title" v-slot="{ active }">
               <router-link :to="item.to" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"> {{ item.title }} </router-link>
            </MenuItem>
            <MenuItem>
              <p class="block px-4 py-2 text-sm text-gray-700 border-t font-semibold">
                 <span class="text-xs text-gray-400">Login as</span> 
                 <span class="block">{{ user ? user.nama : 'Consument'}} </span>
              </p> 
            </MenuItem>
         </MenuItems>
      </transition>
   </Menu>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useStore } from 'vuex'

interface IMenuItem{
   title?: string,
   to?: string
}

const profile: IMenuItem[] = [
    {
      title: 'Profile',
      to: '/u/profile'
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
      to: '/'
    },
  ]
export default defineComponent({
   props:{
      title:{
         type: String,
         required: true
      }
   },
   components: {
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
      const state = reactive({
         user: computed(()=>store.state.userModule.user),
         photoUrl: computed(()=>store.state.userModule.photoUrl),
         profiles: profile
      })

      return {
         ...toRefs(state)
      }
   }
})
</script>