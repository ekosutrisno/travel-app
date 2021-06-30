import { AxiosResponse } from "axios";
import { Module } from "vuex";
import { State } from "..";
import { Shutlle } from '../../@types/interface';
import apiService from '../../config/axiosConfig';

interface StoreShuttle {
   shuttles: Shutlle[],
   shuttleAsal?: Shutlle,
   shuttleTujuan?: Shutlle,
}

const shuttleModule: Module<StoreShuttle, State> = {
   namespaced: true,
   state() {
      return {
         shuttleAsal: {
            shuttleId: 3,
            namaShuttle: 'Bandar Lampung',
            kotaId: {
               kotaId: 2,
               namaKota: 'Lampung'
            },
         },
         shuttleTujuan: {
            shuttleId: 1,
            namaShuttle: 'Gambir',
            kotaId: {
               kotaId: 1,
               namaKota: 'Jakarta'
            },
         },
         shuttles: [],
      }
   },
   mutations: {
      SET_SHUTTLES: (state: StoreShuttle, shuttles: Shutlle[]) => state.shuttles = shuttles,
      SET_SHUTTLE_ASAL: (state: StoreShuttle, shutlle: Shutlle) => state.shuttleAsal = shutlle,
      SET_SHUTTLE_TUJUAN: (state: StoreShuttle, shutlle: Shutlle) => state.shuttleTujuan = shutlle,
   },
   actions: {
      setShuttleData({ commit }) {
         apiService.get(`/shuttle`)
            .then((res: AxiosResponse<Shutlle[]>) => {
               commit('SET_SHUTTLES', res.data);
            })
            .catch(error => console.log(error));
      },

      setShuttleAsal({ commit }, shuttle: Shutlle) {
         commit('SET_SHUTTLE_ASAL', shuttle);
      },

      setShuttleTujuan({ commit }, shuttle: Shutlle) {
         commit('SET_SHUTTLE_TUJUAN', shuttle);
      },
   }
}

export default shuttleModule;