import { AxiosResponse } from "axios";
import { useToast } from "vue-toastification";
import { Module } from "vuex";
import { State } from "..";
import { User } from "../../@types/interface";
import apiService from '../../config/axiosConfig';

export interface StoreUser {
   users: User[],
   user: any,
   photoUrl?: string 
}

const toast = useToast();

const userModule: Module<StoreUser, State> = {
   namespaced: true,
   state() {
      return {
         users: [],
         user: {},
         photoUrl: 'https://res.cloudinary.com/ekosutrisno/image/upload/v1625803063/avatars/MyAvatar_taylrm.png'
      }
   },
   mutations: {
      SET_USERS: (state, users) => state.users = users,
      SET_USER: (state, user) => state.user = user,

   },
   actions: {
      setUserData({ commit }) {
         apiService.get(`/user`)
            .then((res: AxiosResponse<User[]>) => {
               commit('SET_USERS', res.data);

               var userFiltered: User[] = res.data.filter((user: User) => user.userId == 1);
               commit('SET_USER', userFiltered.length ? userFiltered[0] : null);
            })
            .catch(e => console.log(e));
      },
      updateUser({dispatch}, payload: any){
         apiService.put(`/user/${payload.userId}`, payload.userData)
         .then(() =>{
            dispatch('setUserData').then(()=>{
               toast.info("Profile Updated.")
            });

         })
      }
   }
}

export default userModule;