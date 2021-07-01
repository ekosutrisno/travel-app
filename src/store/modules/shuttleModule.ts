import { AxiosResponse } from "axios";
import { Module } from "vuex";
import { State } from "..";
import { JamKeberangkatan, Shutlle } from '../../@types/interface';
import apiService from '../../config/axiosConfig';

interface StoreShuttle {
   shuttles: Shutlle[],
   shuttleAsal?: Shutlle,
   shuttleTujuan?: Shutlle,
   jamKeberangkatan?: JamKeberangkatan[],
   jam: JamKeberangkatan
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
         jamKeberangkatan: [],
         jam: {
            jamKeberangkatanId: 1,
            jam: "07:00"
         }
      }
   },
   mutations: {
      SET_SHUTTLES: (state: StoreShuttle, shuttles: Shutlle[]) => state.shuttles = shuttles,
      SET_JAM_KEBERANGKATAN: (state: StoreShuttle, jamKeberangkatan: JamKeberangkatan[]) => state.jamKeberangkatan = jamKeberangkatan,
      SET_SHUTTLE_ASAL: (state: StoreShuttle, shutlle: Shutlle) => state.shuttleAsal = shutlle,
      SET_SHUTTLE_TUJUAN: (state: StoreShuttle, shutlle: Shutlle) => state.shuttleTujuan = shutlle,
      SET_JAM: (state: StoreShuttle, jam: JamKeberangkatan) => state.jam = jam,
   },
   actions: {
      setShuttleData({ commit, dispatch }) {

         apiService.get(`/shuttle`)
            .then((res: AxiosResponse<Shutlle[]>) => {
               commit('SET_SHUTTLES', res.data);
               dispatch('setJamKeberangkatan')
            })
            .catch(error => console.log(error));
      },

      setJamKeberangkatan({ commit }) {
         apiService.get(`/jamkeberangkatan`)
            .then((res: AxiosResponse<JamKeberangkatan[]>) => {
               commit('SET_JAM_KEBERANGKATAN', res.data);
            })
      },

      setJam({ commit }, jam: JamKeberangkatan) {
         commit('SET_JAM', jam);
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