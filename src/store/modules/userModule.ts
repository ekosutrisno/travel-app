import { AxiosResponse } from "axios";
import { Module } from "vuex";
import { State } from "..";
import { User } from "../../@types/interface";
import apiService from '../../config/axiosConfig';

interface StoreUser {
   users: User[]
}

const userModule: Module<StoreUser, State> = {
   namespaced: true,
   state() {
      return {
         users: []
      }
   },
   mutations: {
      SET_USERS: (state, users) => state.users = users
   },
   actions: {
      setUserData({ commit }) {
         apiService.get(`/user`)
            .then((res: AxiosResponse<User[]>) => {
               commit('SET_USERS', res.data);
            })
            .catch(e => console.log(e));
      }
   }
}

export default userModule;