import { AxiosResponse } from "axios";
import { Module } from "vuex";
import { State } from "..";
import { Transaction } from "../../@types/interface";
import apiService from '../../config/axiosConfig';

interface StoreTransaction {
   transactions: Transaction[]
}

const transactionModule: Module<StoreTransaction, State> = {
   namespaced: true,
   state() {
      return {
         transactions: []
      }
   },
   mutations: {
      SET_TRANSACTIONS: (state: StoreTransaction, transactions: Transaction[]) => state.transactions = transactions
   },
   actions: {
      setTransaction({ commit }, userId: number): void {
         apiService.get(`/transaction/${userId}/transactions`)
            .then((res: AxiosResponse<Transaction[]>) => {
               commit('SET_TRANSACTIONS', res.data);
            });
      },
      async checkoutAction({ dispatch }, payload: any): Promise<void> {
         console.log(payload);
         await apiService.post(`/transaction`, payload)
            .then(() => {
               dispatch('setTransaction', payload.userId);
            });
      }
   }
}

export default transactionModule;