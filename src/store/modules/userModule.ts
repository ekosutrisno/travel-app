import { AxiosResponse } from "axios";
import { Module } from "vuex";
import { State } from "..";
import { User } from "../../@types/interface";
import apiService from '../../config/axiosConfig';

export interface StoreUser {
   users: User[],
   user: any
}

const userModule: Module<StoreUser, State> = {
   namespaced: true,
   state() {
      return {
         users: [],
         user: {}
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
      }
   }
}

export default userModule;